"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    subject: {
        type: mongoose_1.Schema.Types.ObjectId,
        refPath: 'subjectModel'
    },
    subjectModel: {
        type: String,
        required: true,
        enum: ['Article', 'Character', 'City', 'Class', 'City', 'Country', 'God', 'Landmark', 'Monster', 'Race', 'Region', 'Religion', 'User', 'World']
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
const Article = (0, mongoose_1.model)('Article', ArticleSchema);
exports.default = Article;
//# sourceMappingURL=Article.js.map