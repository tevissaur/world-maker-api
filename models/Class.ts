import { Schema, model } from "mongoose";

export interface IClass {
    name: string;
    description: string;
    features: IClassFeature[]
    subClasses?: ISubClass[];
}

export interface ISubClass {
    name: string;
    features: IClassFeature[];
}

export interface IClassFeature {
    name: string;
    requiredLevel: number;
}

const ClassSchema = new Schema<IClass>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    features: [{
        name: String,
        requiredLevel: Number
    }],
    subClasses: [{
        title: {
            type: String,
            required: true,
        },
        features: [{
            name: String,
            requiredLevel: Number
        }]
    }]
});


const Class = model<IClass>('Class', ClassSchema)

export default Class