import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get all the hubs on the SCP Wiki"
    hubs: [Hub!]!
    "Get information about a specific hub on the SCP Wiki"
    hub(path: String!): Hub!
  }

  "Information about a hub on the SCP Wiki"
  type Hub {
    "The title of the hub"
    title: String!
    "The tags of the hub"
    tags: [String!]!
    "The creation date of the hub"
    createdAt: String!
    "The URL of the hub"
    url: String!
    "A list of paths representing articles and tales that are part of the hub"
    references: [String!]!
  }
`;
