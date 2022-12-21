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
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const index_1 = require("./schemas/index");
const auth_1 = require("./utils/auth");
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = require("body-parser");
const connection_1 = __importDefault(require("./config/connection"));
function startApolloServer() {
    connection_1.default.on("error", (error) => console.log(`DB Error: ${error}`));
    connection_1.default.once("open", () => __awaiter(this, void 0, void 0, function* () {
        const port = Number(process.env.PORT) || 3001;
        const app = (0, express_1.default)();
        const httpServer = http_1.default.createServer(app);
        const server = new server_1.ApolloServer({
            typeDefs: index_1.typeDefs,
            resolvers: index_1.resolvers,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        });
        yield server.start();
        app.use("/graphql", (0, cors_1.default)({
            origin: [process.env.ALLOWED_CORS_ORIGIN, "http://localhost:3000"],
            credentials: true
        }), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
            context: auth_1.authMiddleware,
        }));
        yield new Promise((resolve) => httpServer.listen({ port }, resolve));
        console.log(`Server ready at http://localhost:${port}/graphql`);
    }));
}
startApolloServer();
//# sourceMappingURL=server.js.map