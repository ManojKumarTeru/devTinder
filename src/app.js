const express=require("express");

const app=express();



//iam creating server

app.use("/profile",(req,res)=>{
    res.send("This is Profile Page");
})

app.use("/",(req,res)=>{
    res.send("This is Home page");
})


app.listen(3000,()=>{
    console.log("Hi");
})