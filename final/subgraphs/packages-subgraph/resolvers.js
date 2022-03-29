const resolvers = {
  Query: {
    packages: (_, __, { dataSources }) => {
      return dataSources.packagesApi.getAllPackages();
    },
    package: (_, { packageId }, { dataSources }) => {
      return dataSources.packagesApi.getPackage(parseInt(packageId));
    },
  },
  Hotel: {
    packages(hotel, __, { dataSources }) {
      return dataSources.packagesApi.getAllPackages((p) =>
        hotel.packages.contains(p.id),
      );
    },
  },
};

module.exports = resolvers;
