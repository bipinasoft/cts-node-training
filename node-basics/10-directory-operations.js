var fs = require('fs');

// async equivalents
fs.mkdir('stuff', function() {
    fs.readFile('files/read-me.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/write-me.txt', data, function(err) {
            if (err) {
                console.log('Could not write to file');
            }
        });
    });
});

fs.rmdir('stuff', function(err) {
    if (err) {
        console.log(err);
        console.log('Could not delete the directory');
    } else {
        console.log('Successfully deleted the stuff directory');
    }
});

fs.unlink('./stuff/write-me.txt', function(err) {
    if (err) {
        console.log('Could not delete the file');
    }
    else {
        fs.rmdir('stuff', function(err) {
            if (err) {
                console.log('Could not delete the directory');
            } else {
                console.log('Successfully deleted the stuff directory');
            }
        });
    } 
});
