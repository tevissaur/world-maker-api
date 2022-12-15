"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WikiSchema = new mongoose_1.Schema({
    world: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    categories: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Category'
        }]
});
const Wiki = (0, mongoose_1.model)('Wiki', WikiSchema);
exports.default = Wiki;
//# sourceMappingURL=Wiki.js.map