import { Schema, model } from "mongoose";

interface IRace {
    name: string;
    description: string;
}

const raceSchema = new Schema<IRace>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Race = model<IRace>('Race', raceSchema)

export default Race