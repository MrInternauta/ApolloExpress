import express from 'express';
import { ApolloServer, } from 'apollo-server-express';
import { TypeDefs } from './typesDefs';
import { Resolvers } from './resolvers';
import ConnectDB from './db/db';
import routes from './routes';
import {
  graphqlUploadExpress, // A Koa implementation is also exported.
} from 'graphql-upload';

const app = express();
ConnectDB();

async function start() {

  let serverApollo = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers
  });

  await serverApollo.start();
  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  serverApollo.applyMiddleware({ app });

  app.use(routes);

  app.listen(3000, () => {
    console.log('🚀 Server ready at 3000');
  });
}
start();