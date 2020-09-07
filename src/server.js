require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import passport from 'passport';
import schema from './schema';
import './passport';

const { PORT } = process.env || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));
server.express.use('/api', passport.authenticate('jwt'))

server.start({ port: PORT }, () => {
  console.log(`Server Running Port ${PORT}`);
});