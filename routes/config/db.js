import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://ramanaraovk18:ramanarao@cluster0.qee3c.mongodb.net/hodlinfo').then(() => console.log("DB connected"));
} 

    