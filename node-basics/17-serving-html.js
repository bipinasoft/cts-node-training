const fs = require('fs');
const http = require('http');

let inputStream = fs.createReadStream('files/index.html', 'utf8');

const httpServer = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    inputStream.pipe(res);
});

httpServer.listen(3000);