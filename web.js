var express = require('express');
var app = express();
var fs = require('fs')
app.use(express.logger());

var html = fs.readFile('./index.html', function(err, data){
    if (err) throw err;
    console.log(data);
});

app.get('/', function(request, response) {
    response.sendfile('./index.html');
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});