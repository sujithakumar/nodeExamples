var http = require('http');
var externalData = require('./externalModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + externalData.myDateTime());
  res.write("\r\n"+"lets say "+ externalData.newString());
  res.end();
}).listen(8080);
