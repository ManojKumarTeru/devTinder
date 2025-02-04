const mongoose=require("mongoose");


const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://namasteNode:AT2tCzTYe9brAyIe@namstenode.uu9ri.mongodb.net/devTinder"
)};


module.exports=connectDB;




