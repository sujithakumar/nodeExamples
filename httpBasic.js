var http = require('http');
var url = require('url');

http.createServer(function (req, response) {
  //Display data on browser- content type 
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('Hello World!');
  //dummy space
  response.write('<br><br>' + "**********************************" + '<br><br>');
  //read query string from URL : use http://localhost:8080/HelloNode
  response.write(req.url);
  //dummy space
  response.write('<br><br>' + "**********************************" + '<br><br>');
  var queryString = url.parse(req.url, true).query;
  //print query string : use http://localhost:8080/?Name=Lisa&DOB=Nov
  //This returns JSON 
  // to print it in html - read seperate values 
  var name = queryString.Name;
  var dob = queryString.DOB;
  response.write("my name is " + name + " I was born in " + dob);
  //dummy space
  response.write('<br><br>' + "**********************************" + '<br><br>');
  response.end();
}).listen(8080);





