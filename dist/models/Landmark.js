"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_service_1 = __importDefault(require("../services/utils.service"));
const landmarkSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    regions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Region",
        },
    ],
});
landmarkSchema.pre("save", async function (next) {
    console.log(this, "x");
    await utils_service_1.default.createDefaultArticle(this);
    next();
});
const Landmark = (0, mongoose_1.model)("Landmark", landmarkSchema);
exports.default = Landmark;
