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
    activities(package) {
      logPackageActivities(package);
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

const logPackageActivities = (package) => {
  console.log(`\n🪃  FETCH activity references (package ${package.id})`);
  console.log(`➡️  ${package.activities}\n`);
};

module.exports = resolvers;
