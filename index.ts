import express from 'express')
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './models/typeDefs';
import { resolvers } from './resolvers/resolvers';
import { ConnectDB } from './db';

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