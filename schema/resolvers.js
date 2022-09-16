let VillageArray = require("../villageData")


const resolvers = {
    Query: {
      Villages: () => VillageArray,
      Village: (parentValue, args) => VillageArray.find((village) => Number(args.id) === village.id)
    },
    Mutation:{
        addVillage: (parentValue, args) => {
            const newId = VillageArray.length + 1
            const newVillage = {id: newId,name: args.name}
            VillageArray.push(newVillage)
            return newVillage
        },
        deleteVillage: (parentValue, args) =>  {
            const deletedVillages = VillageArray.filter((village)=>village.id !== Number(args.id))
            VillageArray = deletedVillages
            return VillageArray
        },
        editVillage: (parentValue, args) =>  {
            const editedArray = VillageArray.map(
                (village) =>  village.id === Number(args.id)? {...village, name: args.name}: village
            )
            VillageArray = editedArray
            const editedObject = VillageArray.find((village) => Number(args.id) === village.id)
            return editedObject
        }  
    }
};



module.exports = resolvers