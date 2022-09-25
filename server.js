var express = require('express');
var fs = require('fs');

var app = express();

app.get('/api/books', function(req, res) {
    fs.readFile(__dirname + '/data/books.json', function(err, data) {
        res.end(data);
    });
})
 
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
})