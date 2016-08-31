var DDPServer = require('ddp-server');
var ddp = new DDPServer({});

ddp.methods({
  test: function(payload) {
    console.log('received in ddp-server', payload)
    process.send(payload)
  }
});

console.log('Listening on port 4000')
ddp.listen(4000)
