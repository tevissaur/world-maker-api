"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    parentCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategories: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Category',
            default: []
        }]
});
const Category = (0, mongoose_1.model)('Category', CategorySchema);
exports.default = Category;
