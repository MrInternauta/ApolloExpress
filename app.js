const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { ConnectDB } = require('./db');

const app = express();
ConnectDB();

module.exports = app;


async function start() {

  let serverApollo = new ApolloServer({
    typeDefs,
    resolvers
  });

  await serverApollo.start();
  serverApollo.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Hello world!');
  })

  app.use('*', (req, res) => {
    res.status(404).send('Not Found!');
  })


  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
}
start();