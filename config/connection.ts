import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forenedb");


const db = mongoose.connection


export default db;
