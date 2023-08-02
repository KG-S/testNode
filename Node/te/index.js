const express = require("express");
const app = express();


app.use(express.static('./html'));





app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/test.html");
});
app.get("/Login", function(req, res){
    res.sendfile(__dirname+"/html/login.html");
});
app.get('/blog/:nome', function(req, res){
    res.send(req.params);
});






app.listen(10001, function(){
    console.log("servidor rodando na url http://localhost:10001");
})

