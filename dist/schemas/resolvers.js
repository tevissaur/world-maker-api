"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryResolvers_1 = __importDefault(require("./QueryResolvers/queryResolvers"));
const mutationResolvers_1 = __importDefault(require("./MutationResolvers/mutationResolvers"));
const resolvers = {
    ArticleSubject: {
        __resolveType: (parent, context, info) => {
            return context.body.variables.modelName;
        }
    },
    Query: queryResolvers_1.default,
    Mutation: mutationResolvers_1.default
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map