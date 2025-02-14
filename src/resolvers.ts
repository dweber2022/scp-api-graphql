export const resolvers = {
  Query: {
    hubs: async (_, __, { dataSources }) => {
      return dataSources.hubDataSource.getAllHubs();
    }
  }
}