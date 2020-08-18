require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';

const { PORT } = process.env || 4000;

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hihi',
  }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, () => {
  console.log(`Server Running Port ${PORT}`);
});