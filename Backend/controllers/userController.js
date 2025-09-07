import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from"validator"
console.log("JWT Secret from env:", process.env.JWT_SECRET);import dotenv from "dotenv";
dotenv.config();

//login user
const loginUser=async(req,res)=>{
   const {email,password}=req.body;
   try{
 const user= await userModel.findOne({email});
 if(!user){
   res.json({success:false,message:"User doesn't exists"});
 }
 const isMatch=await bcrypt.compare(password,user.password);
 if(!isMatch){
   return res.json({success:false,message:"Invalid credentials"});
 }
 const token=createToken(user._id)
 res.json({success:true,token})
   } catch(err){
      console.log(error);
      res.json({success:false,message:"ERROR !"})

   }

}
const createToken=(id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET)

}

//register user
const registerUser=async(req,res)=>{
const {name,password,email}=req.body;
try{
    //to check if user is already register
 const exists=await userModel.findOne({email});
 if(exists){
    return  res.json({success:false,message:"User already exists !"});
 }
 //validate email format and strong password
 if(!validator.isEmail(email)){
    return res.json({success:false, message:"Email is not valid !"});
 }
 if(password.length<8){
return res.json({success:false, message:"Enter a Strong Password  !"});
 }
 //hashing user password
 const salt =await bcrypt.genSalt(10);
 const hashedpass= await bcrypt.hash(password,salt);
 const newUser=new userModel(
    {
        name:name,
        email:email,
        password:hashedpass,
    }
 );
 const user= await newUser.save();
 const token=createToken(user._id);
 res.json({success:true,token});
 
}

catch(err){
console.log(err);
res.json({success:false,message:"ERROR!"});
}
}


export {loginUser,registerUser}; 