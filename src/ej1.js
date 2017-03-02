var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});


app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(8080, function() {
    console.log("Servidor escuchando en el puerto: 8080");
});