const fs = require('fs');

const myReadStream = fs.createReadStream('files/read-stream.txt', 'utf8');

let numberOfChunks = 0;

// // myReadStream inherits from EventEmitter
myReadStream.on('data', function(chunk) {    
    console.log('New Chunk Received : ' + numberOfChunks );
    numberOfChunks++;
    console.log(chunk.slice(1, 100));

});