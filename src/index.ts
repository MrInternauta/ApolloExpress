import express from 'express';
import { ApolloServer, } from 'apollo-server-express';
import { typeDefs } from './typesDef';
import resolvers from './resolvers/resolvers';
import ConnectDB from './db/db';
import {
  graphqlUploadExpress, // A Koa implementation is also exported.
} from 'graphql-upload';

const app = express();
ConnectDB();

async function start() {

  let serverApollo = new ApolloServer({
    typeDefs,
    resolvers
  });

  await serverApollo.start();
  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  serverApollo.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Hello world!');
  })

  app.use('*', (req, res) => {
    res.status(404).send('Not Found!');
  })


  app.listen(3000, () => {
    console.log('🚀 Server ready at 3000');
  });
}
start();