//file read without stream
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  fs.readFile('/home/nineleaps/Desktop/notes.txt', (error, data) => {
    res.end(data, 'testfile');
  })
});

server.listen(5000);
