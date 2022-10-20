"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CharacterSchema = new mongoose_1.Schema({
    world: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'World'
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Race'
    },
    classes: [{
            class: {
                type: mongoose_1.Schema.Types.ObjectId,
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Organization'
        }],
    residentCity: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'City'
    },
    isNPC: {
        type: Boolean,
        default: false
    }
});
const Character = (0, mongoose_1.model)('Character', CharacterSchema);
exports.default = Character;
