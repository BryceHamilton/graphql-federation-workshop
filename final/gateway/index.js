const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'activities', url: 'http://localhost:4001' },
      { name: 'packages', url: 'http://localhost:4002' },
      { name: 'hotels', url: 'http://localhost:4003' },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
