const http = require('http');

const server = http.createServer((function(request,response) {
  response.writeHead(200,
    {"Content-Type" : "text/plain"});
  response.end("Hello World\n");


}));
const request = require("request");
request("http://www.google.com",function(error,response,body) {
  console.log(body);
  console.log(error);
  console.log(response);
});

server.listen(7000);

