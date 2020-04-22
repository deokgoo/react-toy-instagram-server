require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

const PORT = process.env.PORT || 4000;

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hi'
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, () => console.log(`graphql server on ${PORT}`));