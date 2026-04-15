import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB connected: ${conn.Connection.host}`);
    } catch (error) {
        console.error(`Error:${error}`);
        process.exit(1);
    }
};