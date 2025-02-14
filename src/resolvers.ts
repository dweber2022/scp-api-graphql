export const resolvers = {
  Query: {
    hubs: async (_, __, { dataSources }) => {
      return dataSources.hubDataSource.getAllHubs();
    },
    hub: async (_, { path }, { dataSources }) => {
      return dataSources.hubDataSource.getHubByLink(path);
    },
    items: async (_, __, { dataSources }) => {
      return dataSources.itemDataSource.getAllItems();
    },
    item: async (_, { path }, { dataSources }) => {
      path = path.toUpperCase();
      return dataSources.itemDataSource.getItemByPath(path);
    },
  },
  Hub: {
    createdAt: (parent) => {
      return parent["created_at"];
    },
  },
  Item: {
    createdAt: (parent) => {
      return parent["created_at"];
    },
  },
};
