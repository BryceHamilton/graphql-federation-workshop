const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');

const { readFileSync } = require('fs');

const ActivitiesApi = require('./datasources//activities/ActivitiesApi');
const PackagesApi = require('./datasources/packages/PackagesApi');
const HotelsApi = require('./datasources/hotels/HotelsApi');

const schema = readFileSync('./mono_schema.graphql', { encoding: 'utf-8' });
const typeDefs = gql(schema);
const resolvers = require('./resolvers');

const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    activitiesApi: new ActivitiesApi(),
    packagesApi: new PackagesApi(),
    hotelsApi: new HotelsApi()
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 MonoGraph ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });
