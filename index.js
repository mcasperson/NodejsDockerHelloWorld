const http = require('http');
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello world!');
};

const server = http.createServer(requestHandler);

server.listen(port);