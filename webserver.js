//we want to build web server;
const http=require('http');//library

var server=http.createServer((request,response)=>{
    console.log("request is received from client");
    response.write("<h1>Welcome</h1>");
    response.write("<h1>hr</h1>");
    response.write("<ol><li>DBDA</li><li>DAC</li></ol>");
    response.write("welcome from server");
    response.end();
});

server.listen(9001);
console.log("HTTP server is listening on port 9000");