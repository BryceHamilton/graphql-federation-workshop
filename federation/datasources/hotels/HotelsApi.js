const { hotels } = require('./hotels_data.json');

class HotelsApi {
  getAllHotels() {
    return hotels;
  }

  getHotel(id) {
    return hotels.find(h => h.id === id);
  }
}

module.exports = HotelsApi;
