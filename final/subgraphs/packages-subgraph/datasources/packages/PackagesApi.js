const { packages } = require('./packages_data.json');

const PackagesApi = {
  getAllPackages() {
    return packages;
  },

  getPackageById(id) {
    return packages.find((p) => p.id === id);
  },
};

module.exports = PackagesApi;
