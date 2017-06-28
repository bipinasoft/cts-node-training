const fs = require('fs');

fs.readFile('files/read-me.txt', 'utf8', function(err, data) {
    if (err) {
        console.log('Error occured');
        process.exit(-1);
    }
    else {
        fs.appendFile('files/write-me.txt', data, function(err) {
            if (err) {
                console.log('File written error');
                process.exit(-1);
            } else {
                console.log('File written successfully');
            }
        });
    }

    console.log('This will never get printed');
});

// Deleting a file
fs.unlink('files/write-me.txt', function(err) {
    if (err) {
        console.log(err.message);
        //process.exit(-1);
    } else {
        console.log('successfully deleted the file');
    }
});

const contents = fs.readFileSync('files/read-me.txt', 'utf8');
console.log(contents);
console.log('Some more logic here');

fs.writeFileSync('files/write-me.txt', contents);
console.log('File written successfully');


