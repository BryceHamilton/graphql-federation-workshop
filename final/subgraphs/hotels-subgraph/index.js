const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql(readFileSync('./hotels.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');

const HotelsApi = require('./datasources/activities/HotelsApi');

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      hotelsApi: new HotelsApi(),
    };
  },
});

const port = 4002;
const subgraphName = 'hotels';

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
