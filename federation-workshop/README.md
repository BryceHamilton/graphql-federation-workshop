## 1 - Subgraphs

### 1.1 🏃 Get the subgraphs up and running

- Check `index.js` of each subgraph and modify to make sure they can start properly

Edit and add to:

- `/activities-subgraph/index.js`
- `/packages-subgraph/index.js`
- `/hotels-subgraph/index.js`

- Run `npm start` from the `federation-workshop` directory, to start all subgraphs

[start:*hotels] 🚀 --> http://localhost:4003
[start:*packages] 🚀 --> http://localhost:4002
[start:*activities] 🚀 --> http://localhost:4001

### 1.2 ✏️ Write those schemas!

Start with the relevant entities and queries.

Edit and add to:

- `/activities-subgraph/activities.graphql`
- `/packages-subgraph/packages.graphql`
- `/hotels-subgraph/hotels.graphql`

### 1.3 💪 Last but not least, we'll need resolvers

Write resolvers for the queries.

Edit and add to:

- `/activities-subgraph/resolvers.js`
- `/packages-subgraph/resolvers.js`
- `/hotels-subgraph/resolvers.js`

### Try them out! 🚀

run `npm start` from the `federation-workshop` directory.

## 2 - Subgraphs, part 2 (extending Entities)

### 2.1 📝 Add to the schemas

Extend the Entities (with new fields) in the subgraphs that will resolve those new fields

Edit and add to:

- `/activities-subgraph/activities.graphql`
- `/packages-subgraph/packages.graphql`
- `/hotels-subgraph/hotels.graphql`

### 2.2 💪 ...and the resolvers!

Write resolvers for the fields.

Edit and add to:

- `/activities-subgraph/resolvers.js`
- `/packages-subgraph/resolvers.js`
- `/hotels-subgraph/resolvers.js`

## 3 - Gateway

- Check `index.js` of the gateway and modify to make sure it can start properly

Edit and add to:

- `/gateway/index.js`

- Run `npm run gateway` from the `federation-workshop` directory (from a new terminal) to start the gateway

🚀 Gateway --> http://localhost:4000
