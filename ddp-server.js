var DDPServer = require('ddp-server');
var ddp = new DDPServer({});

ddp.methods({
  test: function(payload) {
    process.send({ payload })
    return true;
  }
});

console.log('Listening on port 4000')
ddp.listen(4000)

process.on('message', function(action){
  console.log('DDP Server receiving message:', action);
})
