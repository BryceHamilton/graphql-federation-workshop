const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql(
  readFileSync('./activities.graphql', { encoding: 'utf-8' }),
);
const resolvers = require('./resolvers');

const server = new ApolloServer({
  // ...
});

const port = 4001;
const subgraphName = 'activities';

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
