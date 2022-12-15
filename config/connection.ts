import * as dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config()

const uri =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : "mongodb://localhost/worldmakerdb";

mongoose.connect(uri);

const db = mongoose.connection;

export default db;
