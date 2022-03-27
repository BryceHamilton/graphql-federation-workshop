const { activities } = require('./activities_data.json');

class ActivitiesApi {
  getAllActivities() {
    return activities;
  }

  getActivity(id) {
    return activities.find(a => a.id === id);
  }
}

module.exports = ActivitiesApi;
