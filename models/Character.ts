import { Schema, Types, model } from 'mongoose';
import { ISubClass } from './Class';

interface ICharacterClasses {
    class: Types.ObjectId;
    level: number;
    subClass: ISubClass
}

interface ICharacter {
    world: Types.ObjectId;
    creator: Types.ObjectId;
    name: string;
    description: string;
    size: string;
    alignment: string;
    race: Types.ObjectId;
    classes: Array<ICharacterClasses>;
    backstory: string;
    bonds: Array<string>;
    goals: Array<string>;
    fears: Array<string>;
    organizations: Array<Schema.Types.ObjectId>;
    residentCity: Types.ObjectId;
    isNPC: boolean;
}

const CharacterSchema = new Schema<ICharacter>({
    world: {
        type: Schema.Types.ObjectId,
        ref: 'World'
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    },
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large']
    },
    alignment: String,
    race: {
        type: Schema.Types.ObjectId,
        ref: 'Race'
    },
    classes: [{
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        },
        level: {
            type: Number,
            required: true
        },
        subClass: {
            name: String,
            features: [{
                name: String,
                requiredLevel: Number
            }]
        }
    }],
    backstory: {
        type: String
    },
    bonds: [String],
    goals: [String],
    fears: [String],
    organizations: [{
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    }],
    residentCity:
    {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    isNPC: {
        type: Boolean,
        default: false
    }
})

const Character = model<ICharacter>('Character', CharacterSchema)

export default Character