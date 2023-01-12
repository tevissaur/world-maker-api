import { Schema, Types, model } from 'mongoose';
import { ISubClass } from './Class';
import { IEquipment } from './Equipment';
import { IFeat } from './Feat';

interface ICharacterClasses {
    class: Types.ObjectId;
    level: number;
    subClass: ISubClass
}

interface IAbilityScores {
    strength: string;
    dexterity: string;
    constitution: string;
}

interface ISkill {
    name: string;
    
}

interface ICharacter {
    world: Types.ObjectId;
    creator: Types.ObjectId;
    name: string;
    description: string;
    size: string;
    alignment: string;
    race: Types.ObjectId;
    classes: ICharacterClasses[];
    backstory: string;
    bonds: string[];
    goals: string[];
    fears: string[];
    organizations: Schema.Types.ObjectId[];
    residentCity: Types.ObjectId;
    isNPC: boolean;
    feats: IFeat[];
    abilityScores: IAbilityScores;
    archetypes?: [];
    inventory: IEquipment[];
    skills: ISkill[];
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
    feats: [{
        type: Schema.Types.ObjectId,
        ref: 'Feat'
    }],
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
    },
    archetypes: [String],
    inventory: [{
        name: String,
        description: String,
        stats: {
            dice: String,
            numDice: Number,
            bonus: String
        }
    }],
    skills: [{
        name: String
    }]
})

const Character = model<ICharacter>('Character', CharacterSchema)

export default Character