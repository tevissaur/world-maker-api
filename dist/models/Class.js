"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClassSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    features: [{
            name: String,
            requiredLevel: Number
        }],
    subClasses: [{
            title: {
                type: String,
                required: true,
            },
            features: [{
                    name: String,
                    requiredLevel: Number
                }]
        }]
});
const Class = (0, mongoose_1.model)('Class', ClassSchema);
exports.default = Class;
