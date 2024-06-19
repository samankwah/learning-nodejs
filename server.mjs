import {createServer} from 'node:http';

// Create HTTP Server
const server = createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>We have an HTTP Server</h1>');
});

// Listen for incoming requset 
server.listen(3000, '127.0.0.1', function(){
    console.log('Server is running');
});


//  Arrow function
const handleRequest = () => {}

// Create HTTP Server
const server = createServer ((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>We have an HTTP Server</h1>');
});

// Listen for incoming requset 
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});