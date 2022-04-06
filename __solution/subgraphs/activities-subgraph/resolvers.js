const activitiesApi = require('./datasources/activities/ActivitiesApi');

const resolvers = {
  Query: {
    activities: () => {
      return activitiesApi.getAllActivities();
    },
    activity: (_, { activityId }) => {
      return activitiesApi.getActivityById(activityId);
    },
  },
  Activity: {
    __resolveReference(activity) {
      return activitiesApi.getActivityById(activity.id);
    },
  },
};

module.exports = resolvers;
