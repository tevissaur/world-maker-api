import { Schema, model } from "mongoose";

interface IClass {
    name: string;
    description: string;
}

const classSchema = new Schema<IClass>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
});

const Class = model<IClass>('Class', classSchema)

export default Class