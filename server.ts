import express from "express";
import { ApolloServer } from "apollo-server-express";
// const { GraphQLUpload, graphqlUploadExpress } = require('graphql-upload')
import path from "path";
// import { authMiddleware } from './utils/auth.js';
import { typeDefs, resolvers } from "./schemas/index";
import cors from "cors";
import http from "http";
import { json } from "body-parser";

import db from "./config/connection";
// import routes from './controllers';

interface MyContext {
  token?: String;
}

async function startApolloServer() {
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers
  });

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // app.use(function (req, res, next) {
  //   res.setHeader('Cache-control', 'public, max-age=36000000')
  // })

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // app.use('/', routes)

  db.on("error", (error: any) => console.log("DB Error", error));

  db.once("open", async () => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer();