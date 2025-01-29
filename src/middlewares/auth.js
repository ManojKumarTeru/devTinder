const admin=(req,res,next)=>{
    const userToken="xyz";
    const checkValid=(userToken==="xyz");
    if(!checkValid){
        res.status(401).send("You are not admin!!!");
    }
    else next();
}

module.exports={
    admin
}