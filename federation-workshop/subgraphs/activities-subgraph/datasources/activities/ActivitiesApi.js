const { activities } = require('./activities_data.json');

const ActivitiesApi = {
  getAllActivities() {
    return activities;
  },

  getActivityById(id) {
    return activities.find((a) => a.id === id);
  },
};

module.exports = ActivitiesApi;
