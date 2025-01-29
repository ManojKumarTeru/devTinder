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

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Contact Mr.Manoj Kumar!");
    }
})




app.listen(3000,()=>{
    console.log("Hi");
})






