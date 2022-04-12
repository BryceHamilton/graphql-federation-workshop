const packagesApi = require('./datasources/packages/PackagesApi');

const resolvers = {
  /* Part 1 */
  Query: {
    packages: () => {
      // ...
    },
    package: (_, { packageId }) => {
      // ...
    },
  },

  /* Part 2 */
  Package: {
    activities(package) {
      // ...
    },
  },
  Hotel: {
    packages(hotel) {
      // ...
    },
  },
};

module.exports = resolvers;
