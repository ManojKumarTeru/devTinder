const express=require("express");

const connectDB=require("./config/database");
const app=express();

const User=require("./models/user");

app.use(express.json()); //it is a middleware to convert the user data into json (readable)

app.post("/signup",async(req,res)=>{

    // console.log(req.body);

    const user=new User(req.body);

    try{
        await user.save();
        res.send("User added successfully!");
    }
    catch(err){
        res.status(400).send("Error saving the user data"+err.message);
    }


    // const user=new User({
    //     firstName:"Rohit",
    //     lastName:"Sharma",
    //     emailid:"rohit@sharma.cpm",
    //     password:"roht@123"
    // })

    // try{
    //     await user.save();
    //     res.send("User Added Successfully!");
    // } catch(err){
    //     res.status(400).send("Error Saving the user:"+err.message);
    // }
    
})


connectDB()
    .then(()=>{
        console.log("Database connection established..!!!");
        app.listen(3000,()=>{
            console.log("Server is running on port 3000!");
        })
    })
    .catch(()=>{
        console.log("Database cannot be established..!");
    });