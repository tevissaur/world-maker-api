"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReligionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    }
});
const Religion = (0, mongoose_1.model)('Religion', ReligionSchema);
exports.default = Religion;
