const express= require('express')
const http = require('http')
const body_parser = require('body-parser')
require('dotenv').config()
var port = process.env.PORT

const app = express()
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())

const router = require('./route')
app.use("/",router)

app.use("/", (req,res)=>{
    res.json({message:"Home Page"})
})


const server = http.createServer(app)
server.listen(port,()=>{
    console.log("server is running in localhost:"+port);
})