const activitiesApi = require('./datasources/activities/ActivitiesApi');

const resolvers = {
  Query: {
    activities: () => {
      // ...
    },
    activity: (_, { activityId }) => {
      // ...
    },
  },
  Activity: {
    __resolveReference(activity) {
      console.log('resolving activity', activity.id);
      // ...
    },
  },
  Package: {
    activities(package) {
      // ...
    },
  },
};

module.exports = resolvers;
