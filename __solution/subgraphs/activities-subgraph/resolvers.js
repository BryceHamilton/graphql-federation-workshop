const activitiesApi = require('./datasources/activities/ActivitiesApi');

const resolvers = {
  Query: {
    activities: () => {
      return activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }) => {
      return activitiesApi.getActivityById(parseInt(activityId));
    },
  },
  Activity: {
    __resolveReference(activity) {
      console.log('resolving activity', activity.id);
      return activitiesApi.getActivityById(parseInt(activity.id));
    },
  },
  Package: {
    activities(package) {
      console.log('passing activities: package', package);
      return activitiesApi
        .getAllActivities()
        .filter((a) => package.activities.contains(a.id));
    },
  },
};

module.exports = resolvers;
