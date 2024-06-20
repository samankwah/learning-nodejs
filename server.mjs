import { createServer } from 'node:http';
import { unlink, writeFile } from 'node:fs';

//  Arrow function
function handleRequest() { }

// Create HTTP Server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create File
        writeFile('./index.html', '<h1>Learning Node.js</h1>', () => {
        // console.log(err)
        // Return response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>File added</h1>');
    });
    } else {
        // Delete filec
        unlink('./index.html', () => {
            // console.log(err)
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');
        });
    }
});

// Listen for incoming requset 
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

