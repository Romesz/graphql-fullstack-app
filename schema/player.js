const { buildSchema } = require('graphql');

const schema = `
    type Query {
        getPlayer(id: Int!): Player,
        getPlayers: [Player]
    }
    type Mutation {
        updatePlayerPos(id: Int!, position: String!): Player
    }
    type Player {
        id: Int,
        name: String,
        position: String
    }
`;

module.exports = buildSchema(schema);