var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
  // res.redirect('https://wiki.doctorlogic.com/dosearchsite.action?queryString=' + req.query.q);
});

var server = app.listen(8888, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App running on %s%2.', host, port);
});
