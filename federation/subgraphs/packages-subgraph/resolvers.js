const packagesApi = require('./datasources/packages/PackagesApi');

const resolvers = {
  Query: {
    packages: () => {
      return packagesApi.getAllPackages();
    },
    package: (_, { packageId }) => {
      return packagesApi.getPackageById(parseInt(packageId));
    },
  },
  Hotel: {
    packages(hotel) {
      return packagesApi.getAllPackages((p) => hotel.packages.contains(p.id));
    },
  },
};

module.exports = resolvers;
