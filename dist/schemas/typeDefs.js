"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = require("fs");
const schema = (0, fs_1.readFileSync)("./schemas/schema.graphql", { encoding: "utf-8" });
const typeDefs = (0, apollo_server_express_1.gql) `
  ${schema}
`;
exports.default = typeDefs;
