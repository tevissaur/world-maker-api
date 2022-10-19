"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GodSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'GodDomain'
        }],
    symbol: {
        type: String,
        required: true
    },
    religions: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Religion'
        }],
    alignment: {
        type: String
    }
});
const God = (0, mongoose_1.model)('God', GodSchema);
exports.default = God;
