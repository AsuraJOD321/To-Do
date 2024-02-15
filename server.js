var express = require('express')
var http = require('http')

const app = express()
    app.use("/",(req,res)=>{
     res.json("express server")
})


var server = http.createServer(app);
  server.listen(6000,()=>{
    console.log("server is running in http://localhost:6000");
})