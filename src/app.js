const express=require("express");

const app=express();

const {admin}=require("./middlewares/auth");

app.use("/login",admin);

app.use("/login/getAlldata",(req,res)=>{
    res.send("Got all data");
})

app.use("/login/pic",(req,res)=>{
    res.send("Iam your picture");
})




app.listen(3000,()=>{
    console.log("Hi");
})






