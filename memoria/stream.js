const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk) {
    console.log(chunk);
});

readableStream.on('end', function () {
    console.log('Fin!');
});