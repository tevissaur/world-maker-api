import { Schema, model, Types } from "mongoose";

export interface IOrganization {
    _id?: Types.ObjectId;
    name: string;
    motives: {
        bonds: string[];
        goals: string[];
        fears: string[];
    }
    relationships: {
        friends: Types.ObjectId[]
        enemies: Types.ObjectId[]
    }
    activeRegions: Types.ObjectId[]
}

const orgSchema = new Schema<IOrganization>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    motives: {
        bonds: [
            {
                type: String
            }
        ],
        goals: [
            {
                type: String
            }
        ],
        fears: [
            {
                type: String
            }
        ]
    },
    relationships: {
        friends: [
            {
                type: String,
                ref: 'Organization'
            }
        ],
        enemies: [
            {
                type: String,
                ref: 'Organization'
            }
        ]
    },
    activeRegions: [
        {
            type: String,
            ref: 'Region'
        }
    ]
})

const Organization = model<IOrganization>('Organization', orgSchema)


export default Organization