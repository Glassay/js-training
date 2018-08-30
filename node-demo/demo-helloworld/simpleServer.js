var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
}

http.createServer(onRequest).listen(8080);

console.log('Server is running at http://127.0.0.1:8080');

