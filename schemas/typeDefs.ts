import { readFileSync } from "fs";

const schema = readFileSync("./schemas/schema.graphql", { encoding: "utf-8" });

const typeDefs = `${schema}`;

export default typeDefs;
