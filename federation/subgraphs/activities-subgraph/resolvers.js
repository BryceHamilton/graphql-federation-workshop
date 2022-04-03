const activitiesApi = require('./datasources//activities/ActivitiesApi');

const resolvers = {
  Query: {
    activities: () => {
      return activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }) => {
      return activitiesApi.getActivityById(parseInt(activityId));
    },
  },
  Package: {
    activities(package) {
      return activitiesApi.getAllActivities((a) =>
        package.activities.contains(a.id),
      );
    },
  },
};

module.exports = resolvers;
