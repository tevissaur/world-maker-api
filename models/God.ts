import { Schema, model, Types } from 'mongoose'

type Domain = {
    title: string;

}

interface IGod {
    name: string;
    description: string;
    domains: Types.ObjectId[];
    symbol: string;
    religions: Types.ObjectId[];
    alignment: string;
}

const GodSchema = new Schema<IGod>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    domains: [{
        type: Schema.Types.ObjectId,
        ref: 'GodDomain'
    }],
    symbol: {
        type: String,
        required: true
    },
    religions: [{
        type: Schema.Types.ObjectId,
        ref: 'Religion'
    }],
    alignment: {
        type: String
    }
})

const God = model<IGod>('God', GodSchema)

export default God