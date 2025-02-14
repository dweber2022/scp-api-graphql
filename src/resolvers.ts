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
    tales: async (_, __, { dataSources }) => {
      return dataSources.taleDataSource.getAllTales();
    },
    tale: async (_, { path }, { dataSources }) => {
      return dataSources.taleDataSource.getTaleByPath(path);
    },
    gois: async (_, __, { dataSources }) => {
      return dataSources.goiDataSource.getAllGOIs();
    },
    goi: async (_, { path }, { dataSources }) => {
      return dataSources.goiDataSource.getGOIByPath(path);
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
  Tale: {
    title: (parent) => {
      const suffix = " - SCP Foundation";
      return parent["title"].slice(0, -suffix.length);
    },
    createdAt: (parent) => {
      return parent["created_at"];
    },
  },
  GOI: {
    createdAt: (parent) => {
      return parent["created_at"];
    },
  },
};
