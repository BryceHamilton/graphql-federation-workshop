const hotelsApi = require('./datasources/hotels/HotelsApi');

const resolvers = {
  Query: {
    hotels: () => {
      return hotelsApi.getAllHotels();
    },
    hotel: (_, { hotelId }) => {
      return hotelsApi.getHotelById(parseInt(hotelId));
    },
  },
  Hotel: {
    __resolveReference({ id }) {
      return hotelsApi.getHotelById(id);
    },
  },
};

module.exports = resolvers;
