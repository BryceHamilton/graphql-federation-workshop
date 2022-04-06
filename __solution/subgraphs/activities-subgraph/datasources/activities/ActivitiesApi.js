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

const log = (id) => {
  console.log('resolving activity', id);
};

module.exports = ActivitiesApi;
