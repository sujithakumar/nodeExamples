var http = require('http');
var upper = require('upper-case');
var lower = require('lower-case');

http.createServer(function(req,res){

    var original = "Hello yumi";
    console.log("original text: " + original)
    
    var convertedUpper = upper.upperCase(original);
    var convertedLower = lower.lowerCase(original);
    
    console.log("i am converted upper case: "+ convertedUpper);
    console.log("i am converted Lower case: "+ convertedLower)

}).listen(8080);