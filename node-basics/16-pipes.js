const fs = require('fs');
const http = require('http');

let inputStream = fs.createReadStream('files/read-stream.txt', 'utf8');
let outputStream = fs.createWriteStream('files/write-stream.txt');

//inputStream.pipe(outputStream);

const httpServer = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    inputStream.pipe(res);
});

httpServer.listen(3000);