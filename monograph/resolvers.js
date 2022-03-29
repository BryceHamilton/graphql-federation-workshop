const resolvers = {
  Query: {
    activities: (_, __, { dataSources }) => {
      return dataSources.activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }, { dataSources }) => {
      return dataSources.activitiesApi.getActivity(parseInt(activityId));
    },
    packages: (_, __, { dataSources }) => {
      return dataSources.packagesApi.getAllPackages();
    },
    package: (_, { packageId }, { dataSources }) => {
      return dataSources.packagesApi.getPackage(parseInt(packageId));
    },
    hotels: (_, __, { dataSources }) => {
      return dataSources.hotelsApi.getAllHotels();
    },
    hotel: (_, { hotelId }, { dataSources }) => {
      return dataSources.hotelsApi.getHotel(parseInt(hotelId));
    },
  },
  Package: {
    activities(parent, _, { dataSources }) {
      return dataSources.activitiesApi
        .getAllActivities()
        .filter((a) => parent.activities.includes(a.id));
    },
  },
  Hotel: {
    packages(parent, _, { dataSources }) {
      return dataSources.packagesApi
        .getAllPackages()
        .filter((a) => parent.packages.includes(a.id));
    },
  },
};

module.exports = resolvers;
