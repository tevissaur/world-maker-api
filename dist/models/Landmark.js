"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const landmarkSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    regions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Region'
        }
    ]
});
const Landmark = (0, mongoose_1.model)('Landmark', landmarkSchema);
exports.default = Landmark;
