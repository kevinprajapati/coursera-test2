const express = require('express')
const app = express()
const port = 2000

app.get("/",function(request,response){
    response.send("hello, world!");
})

app.get("/about",function(req,res){
    res.send("kevin prajapati");
})

app.get("/contact",function(req,res){
    res.send("kevin");
})

app.listen(port,function(){
    console.log("started");
})

