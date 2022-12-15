import Query from "./QueryResolvers/queryResolvers";
import Mutation from "./MutationResolvers/mutationResolvers";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  ArticleSubject: {
    __resolveType: (parent, context, info) => {
      return context.body.variables.modelName;
    }
  },
  Query,
  Mutation
};

export default resolvers;
