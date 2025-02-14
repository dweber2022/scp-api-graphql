export const resolvers = {
  Query: {
    hubs: async (_, __, { dataSources }) => {
      return dataSources.hubDataSource.getAllHubs();
    },
    hub: async (_, { path }, { dataSources }) => {
      return dataSources.hubDataSource.getHubByLink(path);
    },
  },
  Hub: {
    createdAt: (parent) => {
      return parent["created_at"];
    },
  },
};
