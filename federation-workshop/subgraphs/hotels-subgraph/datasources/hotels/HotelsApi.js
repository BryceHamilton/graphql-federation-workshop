const { hotels } = require('./hotels_data.json');

const HotelsApi = {
  getAllHotels() {
    return hotels;
  },

  getHotelById(id) {
    return hotels.find((h) => h.id === parseInt(id));
  },
};

module.exports = HotelsApi;
