import { Schema, Types, model } from "mongoose";


interface IRegion {
    name: string;
    description: string;
}

const regionSchema = new Schema<IRegion>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
});

const Region = model<IRegion>('Region', regionSchema)

export default Region