const express=require("express");

const server=express();

const middleware1=(req,res,next)=>{
    console.log("this is middleware1");
    next();
}
server.use(middleware1);

const middleware2=(req,res,next)=>{
    console.log("this is middleware2");
    next();
}

server.get("/",(request,response)=>{
    response.send("Hello World")
})
server.get("/user",middleware2,(request,response)=>{
    response.send({name: "Aditya" , age : 24 , contact : 87960000 , doj : "11/07/2021", email : "pandeyaditya1233@gmail.com"})
})
server.listen(3001,()=>{
    console.log("Port is runiing at 3001");
})