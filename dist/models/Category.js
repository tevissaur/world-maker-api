"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_service_1 = __importDefault(require("../services/utils.service"));
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    parentCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
    },
    subCategories: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Category",
            default: [],
        },
    ],
});
CategorySchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(this, "x");
        yield utils_service_1.default.createDefaultArticle(this);
        next();
    });
});
const Category = (0, mongoose_1.model)("Category", CategorySchema);
exports.default = Category;
//# sourceMappingURL=Category.js.map