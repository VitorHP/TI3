const electron = require('electron')
const childProcess = require('child_process')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const { ipcMain } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let ddpServer;
let ddpClient;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function createDdpClient () {
  ddpClient = childProcess.fork(`${__dirname}/ddp-client.js`)

  app.on('will-quit', function() {
    ddpClient.kill();
  })

}

function createDdpServer () {
  ddpServer = childProcess.fork(`${__dirname}/ddp-server.js`);

  ddpServer.on('message', (m) => {
    console.log('sending to browser window');
    mainWindow.send('ddp-receive', m);
  })

  app.on('will-quit', function() {
    ddpServer.kill();
  })
}

ipcMain.on('asynchronous-message', (event, command) => {

  switch (command.slug) {
    case 'start-ddp-server':
      createDdpServer();
      event.sender.send('asynchronous-reply', { type: 'create-ddp-server-response', payload: true });
      break;
    case 'start-ddp-client':
      createDdpClient();
      event.sender.send('asynchronous-reply', { type: 'create-ddp-client-response', payload: true });
      break;
    case 'ddp-send':
      if (ddpClient) {
        ddpClient.send({ method: 'test', payload: command.payload });
      }
      break;
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
