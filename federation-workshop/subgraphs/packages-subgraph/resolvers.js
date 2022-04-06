const packagesApi = require('./datasources/packages/PackagesApi');

const resolvers = {
  Query: {
    packages: () => {
      // ..
    },
    package: (_, { packageId }) => {
      // ..
    },
  },
  Package: {
    __resolveReference(package) {
      // ..
    },
    activities(package) {
      // ..
    },
  },
  Hotel: {
    packages(hotel) {
      // ..
    },
  },
};

module.exports = resolvers;
