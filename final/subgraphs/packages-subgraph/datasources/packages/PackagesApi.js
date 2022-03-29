const { packages } = require('./packages_data.json');

class PackagesApi {
  getAllPackages() {
    return packages;
  }

  getPackage(id) {
    return packages.find(p => p.id === id);
  }
}

module.exports = PackagesApi;
