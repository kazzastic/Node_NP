//const { write } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    console.log('Hello');
    res.write('Hello World');
    res.end();
  }
  if(req.url === '/api'){
    console.log('api');
    res.write('Api Page');
    res.end();
  }
});

server.listen(3000);