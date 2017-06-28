const http = require('http');

function handleRequests(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let employee = {
        emp_no: 145,
        first_name: 'Alexandra',
        last_name: 'Daddario',
        country: 'USA'
    };

    res.end(JSON.stringify(employee));
}

const server = http.createServer(handleRequests);

server.listen(3000);