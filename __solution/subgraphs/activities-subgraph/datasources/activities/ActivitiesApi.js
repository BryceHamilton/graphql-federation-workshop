const { activities } = require('./activities_data.json');

const ActivitiesApi = {
  getAllActivities() {
    return activities;
  },

  getActivityById(id) {
    log(id);
    return activities.find((a) => a.id == id);
  },
};

const log = (activity) => {
  console.log('resolving activity', activity.id);
};

module.exports = ActivitiesApi;
