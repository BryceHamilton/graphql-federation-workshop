const packagesApi = require('./datasources/packages/PackagesApi');

const resolvers = {
  Query: {
    packages: () => {
      return packagesApi.getAllPackages();
    },
    package: (_, { packageId }) => {
      return packagesApi.getPackageById(packageId);
    },
  },
  Package: {
    __resolveReference(package) {
      return packagesApi.getPackageById(package.id);
    },
    activities(package) {
      console.log(`🪃  FETCH activity references (package ${package.id})`);
      console.log(`➡️  ${package.activities}`);
      return packagesApi.getPackageById(package.id).activities.map((id) => ({
        __typename: 'Activity',
        id,
      }));
    },
  },
  Hotel: {
    packages(hotel) {
      return packagesApi.getPackagesForHotel(hotel.id);
    },
  },
};

module.exports = resolvers;
