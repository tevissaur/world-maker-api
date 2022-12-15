"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const schema = (0, fs_1.readFileSync)("./schemas/schema.graphql", { encoding: "utf-8" });
const typeDefs = `${schema}`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map