const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('Handling requests');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Awesome nodejs</h1>');
});

server.listen(3000);