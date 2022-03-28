import { gql } from 'apollo-server-express';

export const TypeDefs = gql`
scalar Date
scalar Upload

#DB Types
type Like {
  follower: ID!
  followed: ID!
  isActive: Boolean
  isCheked: Boolean
  lastChange: Date
}

type Match {
  userA: ID!
  userB: ID!
  isActive: Boolean
  isCheked: Boolean
  lastChange: Date
}

type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type Image {
  path: String!
  description: String
  user: ID!
  lastChange: Date
}


type User {
  id: ID!
  name: String!
  lastName: String
  email: String!
  password: String!
  phone: String!
  bio: String
  lastChange: Date
  images: [Image]
  youLiked: [User]
  matched: [Match]
}


#Query Types Custom
input LikeInput {
  follower: ID!
  followed: ID!
  isActive: Boolean
  isCheked: Boolean
}

input MatchInput {
  userA: ID!
  userB: ID!
  isActive: Boolean
  isCheked: Boolean
}

input ImageInput {
  file: Upload!
  user: ID!
  description: String
}


input UserInput {
  name: String
  lastName: String
  bio: String
  email: String
  password: String
  phone: String
}

type Query {
  getUser(userId: ID!): User
  countLikes(userId: ID!): Int
  countMatches(userId: ID!): Int
  getImages(userId: ID!): [Image]
  getNewLikes(userId: ID!, perPage: Int, page: Int): [Like]
  getNewMatches(userId: ID!, perPage: Int, page: Int): [Match]
  getMatches(userId: ID!, perPage: Int, page: Int): [Match]
  getLikes(userId: ID!, perPage: Int, page: Int): [Like]
}

type Mutation {
  #User mutations
  createUser(user: UserInput!): User
  updateUser(userId: ID!, user: UserInput!): User
  deleteUser(userId: ID!): User

  #Image mutations
  deleteImage(imageId: ID!): Image
  updateImage(image: ImageInput!): Image

  #Like mutations
  createLike(like: LikeInput!): Like
  updateLike(likeId: ID!, like: LikeInput!): Like
  deleteLike(likeId: ID!): Like

  #Match mutations
  createMatch(match: MatchInput!): Match
  updateMatch(matchId: ID!, match: MatchInput!): Match
  deleteMatch(matchId: ID!): Match
}
`;

