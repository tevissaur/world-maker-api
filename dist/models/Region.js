"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const regionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
});
const Region = (0, mongoose_1.model)('Region', regionSchema);
exports.default = Region;
//# sourceMappingURL=Region.js.map