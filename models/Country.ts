import { Schema, Types, model } from "mongoose";

type Government = {
    keyMembers: [{
        character: Schema.Types.ObjectId,
        position: string
    }],
    style: string
}
interface ICountry {
    name: string;
    government: Government;
    region: Schema.Types.ObjectId;
}


const countrySchema = new Schema<ICountry>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    government: {
        keyMembers: [{
            character: {
                type: Schema.Types.ObjectId,
                ref: 'Character'
            },
            position: String
        }],
        style: {
            type: String,
            enum: ['Representative Democracy', 'Federation', '']
        }
    },
    region: {
        type: Schema.Types.ObjectId,
        ref: 'Region'
    }
})

const Country = model<ICountry>('Country', countrySchema)

export default Country

