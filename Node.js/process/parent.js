var cp = require('child_process');
var child1 = cp.fork('child.js');
var child2 = cp.fork('child.js');

var server = require('net').createServer()
server.listen(1337, () => {
  console.log('1337 is listening');
  child1.send('server', server);
  child2.send('server', server);
});