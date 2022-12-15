"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    name: String
});
const Item = (0, mongoose_1.model)('Item', ItemSchema);
exports.default = Item;
//# sourceMappingURL=Item.js.map