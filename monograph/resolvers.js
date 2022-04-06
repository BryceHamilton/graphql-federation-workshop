const activitiesApi = require('./datasources//activities/ActivitiesApi');
const packagesApi = require('./datasources/packages/PackagesApi');
const hotelsApi = require('./datasources/hotels/HotelsApi');

const resolvers = {
  Query: {
    activities: () => {
      return activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }) => {
      return activitiesApi.getActivityById(activityId);
    },
    packages: () => {
      return packagesApi.getAllPackages();
    },
    package: (_, { packageId }) => {
      return packagesApi.getPackageById(packageId);
    },
    hotels: () => {
      return hotelsApi.getAllHotels();
    },
    hotel: (_, { hotelId }) => {
      return hotelsApi.getHotelById(hotelId);
    },
  },
  Package: {
    activities(package) {
      return activitiesApi
        .getAllActivities()
        .filter((a) => package.activities.includes(a.id));
    },
  },
  Hotel: {
    packages(hotel) {
      return packagesApi
        .getAllPackages()
        .filter((a) => hotel.packages.includes(a.id));
    },
  },
};

module.exports = resolvers;
