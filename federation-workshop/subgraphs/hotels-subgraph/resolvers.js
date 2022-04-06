const hotelsApi = require('./datasources/hotels/HotelsApi');

const resolvers = {
  Query: {
    hotels: () => {
      // ..
    },
    hotel: (_, { hotelId }) => {
      // ..
    },
  },
  Hotel: {
    __resolveReference({ id }) {
      // ..
    },
  },
};

module.exports = resolvers;
