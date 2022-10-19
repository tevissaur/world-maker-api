import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forenedb");

export default mongoose.connection;
