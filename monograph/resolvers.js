const resolvers = {
  Query: {
    activities: (_, __, { dataSources }) => {
      return dataSources.activitiesApi.getActivities();
    },
    activity: (_, __, { dataSources, id }) => {
      return dataSources.activitiesApi.getActivity(id);
    },
    packages: (_, __, { dataSources }) => {
      console.log('getting packages');
      console.log('dataSources', dataSources);
      const packages = dataSources.packagesApi.getAllPackages();
      console.log('packages', packages);
      return dataSources.packagesApi.getAllPackages();
    },
    package: (_, __, { dataSources, id }) => {
      return dataSources.packagesApi.getPackage(id);
    },
    hotels: (_, __, { dataSources }) => {},
    hotel: (_, __, { dataSources }) => {}
  }
};

module.exports = resolvers;
