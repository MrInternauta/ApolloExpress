const { gql } = require('apollo-server-express');

const typeDefs = gql`
#DB Types
type Task {
  id: ID!
  title: String!
  description: String,
  done: Boolean,
  otro: String
}

type User {
  id: ID!
  name: String!
  lastName: String!
  email: String!
  password: String!
  phone: String
  image: String
}

#Query Types Custom
input TaskInput {
  title: String
  description: String
}
input UserInput {
  name: String
  lastName: String
  email: String
  password: String
  phone: String
  image: String
}

type Query {
  hello: String,
  #Task queries
  getAllTasks: [Task]
  getTask(id: ID!): Task
  countTasks: Int!
  #User queries
  getUser(id: ID!): User
  getAllUsers: [User]
}

type Mutation {
  #Task mutations
  createTask(task: TaskInput!): Task
  updateTask(id:ID!, task: TaskInput!): Task
  deleteTask(id: ID!): Task
  #User mutations
  createUser(user: UserInput!): User
  updateUser(id: ID!, user: UserInput!): User
  deleteUser(id: ID!): User
}
`;

module.exports = { typeDefs };