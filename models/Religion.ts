import { Schema, model, Types } from "mongoose";

interface IReligion {
    name: string;
    description: string;
    gods: Types.ObjectId[];
}

const ReligionSchema = new Schema<IReligion>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    }
})

const Religion = model<IReligion>('Religion', ReligionSchema)

export default Religion
