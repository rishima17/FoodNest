import mongoose from "mongoose";

 export const connectDB= async ()=>{
    await mongoose.connect("mongodb+srv://rishima1711:1724530261@rishima-projects.udgxgyc.mongodb.net/bytebites").then(()=>console.log("DB connected"));
}