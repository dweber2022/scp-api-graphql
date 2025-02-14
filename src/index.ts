import { HubDataSource } from "./datasources/hub";
import { ItemDataSource } from "./datasources/item";
import { TaleDataSource } from "./datasources/tale";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { GOIDataSource } from "./datasources/goi";

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          hubDataSource: new HubDataSource(),
          itemDataSource: new ItemDataSource(),
          taleDataSource: new TaleDataSource(),
          goiDataSource: new GOIDataSource(),
        },
      };
    },
  });
  console.log(`Server is running at ${url}`);
};

startApolloServer();
