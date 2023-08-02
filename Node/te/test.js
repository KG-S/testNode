var http = require('http');
http.createServer(function(req, res){
    res.end("Bem vindo! oi")
    
}).listen(10000);

console.log("o serve esta de pé")


