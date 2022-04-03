const { packages } = require('./packages_data.json');

const PackagesApi = {
  getAllPackages() {
    return packages;
  },

  getPackageById(id) {
    return packages.find((p) => p.id === parseInt(id));
  },

  getPackagesForHotel(hotelId) {
    console.log(`🪃   FETCH packages (hotel ${hotelId})`);
    const id = parseInt(hotelId);
    const hotelPackages = packages.filter((p) => p.hotelIds.includes(id));
    const packageIds = hotelPackages.map((p) => p.id);
    console.log('➡️ ', packageIds);
    return hotelPackages;
  },
};

module.exports = PackagesApi;
