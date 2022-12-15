"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const monsterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    size: {
        type: String
    },
    regions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Region'
        }
    ]
});
const Monster = (0, mongoose_1.model)('Monster', monsterSchema);
exports.default = Monster;
//# sourceMappingURL=Monster.js.map