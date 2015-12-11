var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.redirect('https://wiki.doctorlogic.com/dosearchsite.action?queryString=' + req.query.q);
});

var server = app.listen(8888, function() {
  console.log('App running.');
});
