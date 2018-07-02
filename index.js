const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');

const playerS = require('./schema/player');
const data = require('./data').players;

const app = express();

app.use(cors());

const getPlayerById = (args) => data.filter((player) => player.id === args.id)[0];
const updatePlayerPosById = ({id, position}) => {
    return data.filter((player) => id === player.id).map((player) => {
        player.position = position;
        return player;
    })
}

const root = {
    getPlayers: data,
    getPlayer: getPlayerById,
    updatePlayerPos: updatePlayerPosById
};
 
app.use('/graphql', graphqlHTTP({
  schema: playerS,
  rootValue: root,
  graphiql: true
}));
 
app.listen(3000, () => console.log('Express GraphQL server running on localhost:3000/graphql'));