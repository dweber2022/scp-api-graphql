import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get all the hubs on the SCP Wiki"
    hubs: [Hub!]!
    "Get information about a specific hub on the SCP Wiki"
    hub(path: String!): Hub!
    "Get all the items on the SCP Wiki"
    items: [Item!]!
    "Get information about a specific item on the SCP Wiki"
    item(path: String!): Item!
    "Get all the tales on the SCP Wiki"
    tales: [Tale!]!
    "Get information about a specific tale on the SCP Wiki"
    tale(path: String!): Tale!
    "Get all the GOIs on the SCP Wiki"
    gois: [GOI!]!
    "Get information about a specific GOI on the SCP Wiki"
    goi(path: String!): GOI!
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

  "Information about an item on the SCP Wiki"
  type Item {
    "The title of the item"
    title: String!
    "The rating of the item"
    rating: Int!
    "The tags of the item"
    tags: [String!]!
    "The series of the item"
    series: String!
    "The creation date of the item"
    createdAt: String!
    "The creator of the item"
    creator: String!
    "A list of image URLs for each image on the item page"
    images: [String!]!
    "The URL of the item"
    url: String!
    "A list of paths representing hubs the item is part of"
    hubs: [String!]!
    "A list of paths representing articles and tales that are related to the item"
    references: [String!]!
  }

  "Information about a tale on the SCP Wiki"
  type Tale {
    "The title of the tale"
    title: String!
    "The rating of the tale"
    rating: Int!
    "The tags of the tale"
    tags: [String!]!
    "The creation date of the tale"
    createdAt: String!
    "The creator of the tale"
    creator: String!
    "A list of image URLs for each image on the tale page"
    images: [String!]!
    "The URL of the tale"
    url: String!
    "A list of paths representing hubs the tale is part of"
    hubs: [String!]!
    "A list of paths representing articles and tales that are related to the tale"
    references: [String!]!
  }

  "Information about a GOI on the SCP Wiki"
  type GOI {
    "The title of the GOI"
    title: String!
    "The rating of the GOI"
    rating: Int!
    "The tags of the GOI"
    tags: [String!]!
    "The creation date of the GOI"
    createdAt: String!
    "The creator of the GOI"
    creator: String!
    "The URL of the GOI"
    url: String!
    "A list of paths representing hubs the GOI is part of"
    hubs: [String!]!
  }
`;
