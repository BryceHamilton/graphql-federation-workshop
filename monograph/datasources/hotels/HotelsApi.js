const { hotels } = require('./hotels_data.json');

const HotelsApi = {
  getAllHotels() {
    console.log('🪃  FETCH hotels');
    const ids = hotels.map((h) => h.id);
    console.log('➡️ ', ids);
    return hotels;
  },

  getHotelById(id) {
    return hotels.find((h) => h.id === parseInt(id));
  },
};

module.exports = HotelsApi;
