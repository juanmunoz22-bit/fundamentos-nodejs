const http = require('http');

http.createServer(router).listen(3000);

function router (request, response) {
    console.log('Nueva peticion');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('Hola, que tal');
            response.end();
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Error 404: No se lo que quieres');
            response.end();
    }

    // response.writeHead(201, { 'Content-Type': 'text/plain' });

    // response.write('Hola, ya se usar HTTP de NodeJS');

    // response.end();
}

console.log('Escuchando en el puerto 3000');