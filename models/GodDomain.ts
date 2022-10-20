import { Schema, model } from "mongoose";

interface IGodDomain {
    name: string;
    description: string;
}

const GodDomainSchema = new Schema<IGodDomain>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const GodDomain = model<IGodDomain>('GodDomain', GodDomainSchema)

export default GodDomain