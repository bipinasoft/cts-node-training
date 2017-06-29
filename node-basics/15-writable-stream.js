const fs = require('fs');

let myReadStream = fs.createReadStream('files/read-stream.txt', 'utf8');
let myWriteStream = fs.createWriteStream('files/write-stream.txt');

let numberOfChunks = 0;

myReadStream.on('data', function(chunk) {
    numberOfChunks++;
    myWriteStream.write(chunk);
    console.log('Chunk Written : ', numberOfChunks);
});