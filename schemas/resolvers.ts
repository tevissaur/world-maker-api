import Query from "./QueryResolvers/queryResolvers";
import Mutation from "./MutationResolvers/mutationResolvers";

const resolvers = {
  ArticleSubject: {
    __resolveType(obj, context, { variableValues: { modelName } }) {
      return modelName;
    },
  },
  Query,
  Mutation
};

export default resolvers;
