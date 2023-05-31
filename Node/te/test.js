var http = require('http');
http.createServer(function(req, res){
    res.end("Bem vindo!")
    
}).listen(60000);

console.log("o serve esta de pé")