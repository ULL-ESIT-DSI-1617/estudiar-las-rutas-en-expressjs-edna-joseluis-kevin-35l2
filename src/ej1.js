var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
  res.download('../docs/CAPITULO1/CAPITULO1.md');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});


app.put('/CAPITULO1', function (req, res) {
  res.send('Got a PUT request at /docs/CAPITULO1');
});


app.delete('/CAPITULO1', function (req, res) {
  res.send('Got a DELETE request at /docs/CAPITULO2');
});

app.listen(8080, function() {
    console.log("Servidor escuchando en el puerto: 8080");
});