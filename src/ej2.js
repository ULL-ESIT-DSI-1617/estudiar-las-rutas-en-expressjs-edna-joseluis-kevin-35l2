var express = require('express');
var app = express();

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});


app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});


app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});


app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});