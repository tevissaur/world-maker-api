"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const countrySchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    government: {
        keyMembers: [{
                character: {
                    type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Region'
    },
    description: String
});
const Country = (0, mongoose_1.model)('Country', countrySchema);
exports.default = Country;
