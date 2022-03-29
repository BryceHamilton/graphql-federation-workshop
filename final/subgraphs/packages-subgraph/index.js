const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql(readFileSync('./packages.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');

const PackagesApi = require('./datasources/packages/PackagesApi');

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      packagesApi: new PackagesApi(),
    };
  },
});

const port = 4002;
const subgraphName = 'reviews';

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
