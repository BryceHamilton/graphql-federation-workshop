const resolvers = {
  Query: {
    hotels: (_, __, { dataSources }) => {
      return dataSources.hotelsApi.getAllHotels();
    },
    hotel: (_, { hotelId }, { dataSources }) => {
      return dataSources.hotelsApi.getHotel(parseInt(hotelId));
    },
  },
  Hotel: {
    __resolveReference({ id }, { dataSources }) {
      return dataSources.hotelsApi.getHotel(id);
    },
  },
};

module.exports = resolvers;
