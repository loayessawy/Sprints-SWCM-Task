#!/usr/bin/env node
http = require('http');

const server = http.createServer((req, res) => {

   if (req.method === 'POST') {

      let body = ''
      req.on('data', chunk => {
         body += chunk;

      })
      req.on('close', () => {

         console.log(body)

      })
      res.writeHead(201)
      res.end("body");

   } else {
      res.writeHead(200)
      res.end('hi');

   }
   
})
server.listen(5050, 'localhost', () => {

   console.log('server is running now ')
})