import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get all the hubs on the SCP Wiki"
    hubs: [Hub!]!
  }

  "Information about a hub on the SCP Wiki"
  type Hub {
    "The title of the hub"
    title: String!
    "The tags of the hub"
    tags: [String!]!
  }
`;
