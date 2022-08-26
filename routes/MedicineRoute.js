const Medicine = require("../models/MedicineSchema");

const Router = require("express");

const MedicineRoute = Router();


//User signup
// UserRoute.post("/signup",(req,res)=>{
//     const {name,email,password}=req.body;
//     const hash = crypto.pbkdf2Sync(password,"SECRETSALT",60,64,"sha256").toString("hex");
//     const user = new User({name,email,hash});
//     user.save().then(()=>{
//         res.send({message:"User created successfully"});
//     });
// })

//Getting single user
MedicineRoute.get("/single/:id", async(req,res)=>{
    const singleusermedicine= await Medicine.find({"user":req.params.id});
    res.send(singleusermedicine);
})



module.exports=MedicineRoute;