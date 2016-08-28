var DDPServer = require('ddp-server');
var ddp = new DDPServer({});

ddp.methods({
  test: function() {
    process.send({ message: 'received' })
    return true;
  }
});

ddp.listen(4000)
