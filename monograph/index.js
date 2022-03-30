const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const { readFileSync } = require('fs');

const schema = readFileSync('./mono_schema.graphql', { encoding: 'utf-8' });
const typeDefs = gql(schema);
const resolvers = require('./resolvers');

const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 MonoGraph ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
