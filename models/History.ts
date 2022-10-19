import { Schema, model, Types } from "mongoose";
import { IArticle } from "./Article";

interface IHistory extends IArticle {
    date: string;
}

const historySchema = new Schema<IHistory>({
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: String,
    }
})

const History = model<IHistory>('History', historySchema)

export default History





