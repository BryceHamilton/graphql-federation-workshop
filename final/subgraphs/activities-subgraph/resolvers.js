const resolvers = {
  Query: {
    activities: (_, __, { dataSources }) => {
      return dataSources.activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }, { dataSources }) => {
      return dataSources.activitiesApi.getActivity(parseInt(activityId));
    },
  },
  Activity: {
    __resolveReference({ id }, { dataSources }) {
      return dataSources.activitiesApi.getActivity(id);
    },
  },
  Package: {
    activities(package, __, { dataSources }) {
      return dataSources.activitiesApi.getAllActivities((a) =>
        package.activities.contains(a.id),
      );
    },
  },
};

module.exports = resolvers;
