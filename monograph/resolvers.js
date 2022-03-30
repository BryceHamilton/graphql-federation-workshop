const activitiesApi = require('./datasources//activities/ActivitiesApi');
const packagesApi = require('./datasources/packages/PackagesApi');
const hotelsApi = require('./datasources/hotels/HotelsApi');

const resolvers = {
  Query: {
    activities: () => {
      return activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }) => {
      return activitiesApi.getActivityById(parseInt(activityId));
    },
    packages: () => {
      return packagesApi.getAllPackages();
    },
    package: (_, { packageId }) => {
      return packagesApi.getPackageById(parseInt(packageId));
    },
    hotels: () => {
      return hotelsApi.getAllHotels();
    },
    hotel: (_, { hotelId }) => {
      return hotelsApi.getHotelById(parseInt(hotelId));
    },
  },
  Package: {
    activities(parent, _) {
      return activitiesApi
        .getAllActivities()
        .filter((a) => parent.activities.includes(a.id));
    },
  },
  Hotel: {
    packages(parent) {
      return packagesApi
        .getAllPackages()
        .filter((a) => parent.packages.includes(a.id));
    },
  },
};

module.exports = resolvers;
