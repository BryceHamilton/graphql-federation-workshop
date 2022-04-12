const activitiesApi = require('./datasources/activities/ActivitiesApi');

const resolvers = {
  /* Part 1 */
  Query: {
    activities: () => {
      // ...
    },
    activity: (_, { activityId }) => {
      // ...
    },
  },

  /* Part 2 */
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
