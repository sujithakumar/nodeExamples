var url = require('url');
//writing data to console

var sampleUrl = "http://localhost:8080/default.htm?Name=Joe&Age=10&Gender=male";
//read the URL 
var input = url.parse(sampleUrl,true);

//writing the parts of url 
console.log("writing the parts of url");
console.log(" ");
console.log("HOST: " + input.hostname);
console.log(" ");
console.log("PATH: " + input.pathname);
console.log(" ");
console.log("PORT: " + input.port);
console.log(" ");
console.log("Getting the querystring as whole : "+ input.search);
console.log(" ");
console.log("PARAMETERS / QUERY STRING - json format : "+ JSON.stringify(input.query));
console.log(" ");
console.log("Getting data from query string/parameters in json format");

var queryParams = input.query;
console.log("Name : "+ queryParams.Name);
console.log("Age : "+ queryParams.Age);
console.log("Gender : "+ queryParams.Gender);



