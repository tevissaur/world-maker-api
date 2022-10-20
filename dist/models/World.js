"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const worldSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    religions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Religion'
        }
    ],
    classes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    races: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Race'
        }
    ],
    regions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Region'
        }
    ],
    historicalEvents: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'History'
        }
    ],
    description: {
        type: String
    },
    wiki: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wiki'
    }
});
// TODO: Virtual Populate Characters
const World = (0, mongoose_1.model)('World', worldSchema);
exports.default = World;
