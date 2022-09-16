const {  gql } = require('apollo-server');



const typeDefs = gql`
    type villagetype {
        id:ID,
        name: String
    },
    type Query {
        Villages: [villagetype]
        Village(id:ID): villagetype
    },
    type Mutation {
        addVillage(name:String): villagetype,
        deleteVillage(id:ID): villagetype,
        editVillage(id:ID, name: String): villagetype
    }
`;


module.exports = typeDefs