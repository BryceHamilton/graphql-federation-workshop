const hotelsApi = require('./datasources/hotels/HotelsApi');

const resolvers = {
  /* Part 1 */
  Query: {
    hotels: () => {
      // ...
    },
    hotel: (_, { hotelId }) => {
      // ...
    },
  },

  /* Part 2 */
  Hotel: {
    __resolveReference({ id }) {
      // ...
    },
  },
};

module.exports = resolvers;
