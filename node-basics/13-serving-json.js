const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let employee = {
        emp_no: 145,
        first_name: 'Alexandra',
        last_name: 'Daddario'
    };

    res.end(JSON.stringify(employee));
});

server.listen(3000);