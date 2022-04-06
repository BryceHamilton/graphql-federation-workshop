const { packages } = require('./packages_data.json');

const PackagesApi = {
  getAllPackages() {
    return packages;
  },

  getPackageById(id) {
    return packages.find((p) => p.id === parseInt(id));
  },

  getPackagesForHotel(hotelId) {
    const id = parseInt(hotelId);
    const hotelPackages = packages.filter((p) => p.hotelIds.includes(id));

    return hotelPackages;
  },
};

module.exports = PackagesApi;
