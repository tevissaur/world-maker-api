"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_service_1 = __importDefault(require("../services/utils.service"));
const worldSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    religions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Religion'
        }
    ],
    classes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    races: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Race'
        }
    ],
    regions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Region'
        }
    ],
    historicalEvents: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'History'
        }
    ],
    description: {
        type: String
    },
    wiki: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wiki'
    }
});
// TODO: Virtual Populate Characters
worldSchema.post("save", async function (doc, next) {
    console.log(doc.toJSON(), this.baseModelName);
    await utils_service_1.default.createDefaultArticle(doc);
    next();
});
const World = (0, mongoose_1.model)('World', worldSchema);
exports.default = World;
