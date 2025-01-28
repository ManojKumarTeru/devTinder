const express=require("express");

const app=express();


app.get("/test",(req,res)=>{
    console.log(req);
    res.send({
        name:"Manoj Kumar Teru",
        age:20
    })
})

app.post("/test",(req,res)=>{
    res.send("Data pushed into database successfully!");
})

app.listen(3000,()=>{
    console.log("Hi");
})