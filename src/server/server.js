var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name + ' ' + req.params.lname);
  next();
}

var server = restify.createServer();
server.get('/hello/:name/:lname', respond);

server.listen(1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});
