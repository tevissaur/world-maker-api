"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const raceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});
const Race = (0, mongoose_1.model)('Race', raceSchema);
exports.default = Race;
