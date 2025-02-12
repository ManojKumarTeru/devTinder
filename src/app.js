const express=require("express");

const connectDB=require("./config/database");
const app=express();

const User=require("./models/user");

app.use(express.json()); //it is a middleware to convert the user data into json (readable)


app.get("/users",async(req,res)=>{
    const name=req.body.firstName;
    try{
        const users=await User.find({firstName: name});
        res.send(users);
    }
    catch(err){
        res.send("Something went wrong");
    }

})

app.delete("/delete",async (req,res)=>{
    console.log(req.body.userid);
    try{
        await User.findOneAndDelete({_id:req.body.userid});
        res.send("User deleted Successfully!");
    }
    catch(err){
        res.send("something went wrong");
    }
})

app.patch(("/patch"),async(req,res)=>{
    const userid=req.body.userid;
    const data=req.body;
    try{
        const user=await User.findByIdAndUpdate({_id:userid},data,{returnDocument:"after"}); //id and data
        res.send("user updated successsfully");
        console.log(user);
    }
    catch(err){
        res.send("Something went wrong");
    }
})

app.get("/feed",async(req,res)=>{
    try{
        const users=await User.find({});
        res.send(users);
    }
    catch(err){
        res.send("Something went wrong");
    }
})


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