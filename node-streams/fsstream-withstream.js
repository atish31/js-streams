//file read without stream
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('/home/nineleaps/Desktop/notes.txt');
  console.log(res);
  stream.pipe(res);
});

server.listen(5000);
