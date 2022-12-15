"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GodDomainSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});
const GodDomain = (0, mongoose_1.model)('GodDomain', GodDomainSchema);
exports.default = GodDomain;
//# sourceMappingURL=GodDomain.js.map