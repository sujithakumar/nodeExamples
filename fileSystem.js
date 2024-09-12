var fileSystem = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    //Read html file 
    fileSystem.readFile('demoFile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

//Read txt file 
fileSystem.readFile('demo.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})

//Read unavailable txt file -- results in error
// fileSystem.readFile('demoN.txt', function (err, data) {
//     if (err) throw err;
//     console.log("Wat did i do?");
// })

//create or update : appendFile()
fileSystem.appendFile('demo.txt', 'Hello I am a new content', function (err) {
    if (err) throw err;
    console.log('Content updated! !');
});

//create or update : appendFile() - unavailable file(demo1.txt)
fileSystem.appendFile('demo1.txt', 'Hello I was newly created!', function (err) {
    if (err) throw err;
    console.log('File "demo1" created! Content updated!');
});

//open the file 
fileSystem.open('demo.txt', 'w', function (err) {
    if (err) throw err;
    console.log('File "demo" Opened! ');
});


//open the file - unavailable file(demo2.txt)
fileSystem.open('demo2.txt', 'w', function (err) {
    if (err) throw err;
    console.log('File "demo2" created!');
});

//Write - replaces the text in the file 
fileSystem.writeFile('demo.txt', 'New Content', function (err) {
    if (err) throw err;
    console.log('Content updated!');
});

//Write - replaces - unavailable - create a file
fileSystem.writeFile('demo3.txt', 'New Content', function (err) {
    if (err) throw err;
    console.log('File "demo3" created! Content added!');
});

// //delete 
// fileSystem.unlink('demoDel.txt', function (err) {
//     if (err) throw err;
//     console.log('File "demoDel" deleted!');
// });

// //deleting unavailable file -- results in error
// fileSystem.unlink('demo5.txt', function (err) {
//     if (err) throw err;
//     console.log('File "demo5" deleted!');
// });

//rename
fileSystem.rename('demoReplace.txt','newName.txt',function(err){
    if (err) throw err;
    console.log("rename Successful")
})

//rename - unavailable file  - err
fileSystem.rename('demoReplaceNoExist.txt','newName',function(err){
    if (err) throw err;
    console.log("rename Failed")
})

