"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
// const { GraphQLUpload, graphqlUploadExpress } = require('graphql-upload')
const path_1 = __importDefault(require("path"));
// import { authMiddleware } from './utils/auth.js';
const index_1 = require("./schemas/index");
const connection_1 = __importDefault(require("./config/connection"));
async function startApolloServer() {
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: index_1.typeDefs,
        resolvers: index_1.resolvers
    });
    const PORT = process.env.PORT || 3001;
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    // app.use(function (req, res, next) {
    //   res.setHeader('Cache-control', 'public, max-age=36000000')
    // })
    if (process.env.NODE_ENV === "production") {
        app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
    }
    app.get("/", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../client/public/index.html"));
    });
    // app.use('/', routes)
    connection_1.default.on("error", (error) => console.log("DB Error", error));
    connection_1.default.once("open", async () => {
        await server.start();
        server.applyMiddleware({ app });
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}
startApolloServer();
