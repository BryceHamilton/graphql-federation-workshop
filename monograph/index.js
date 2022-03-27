const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');

const PackagesApi = require('./datasources/PackagesApi');
const ActivitiesApi = require('./datasources/ActivitiesApi');
const HotelsApi = require('./datasources/HotelsApi');

const typeDefs = gql(
  readFileSync('./mono_schema.graphql', { encoding: 'utf-8' })
);
const resolvers = require('./resolvers');

const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 MonoGraph ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });
