const {addOwner,getData} = require("../dao/petOwnerDao");

module.exports.addOwner = async function(data){
   return await addOwner(data);
}

module.exports.getData = async function(data){
   return await getData(data);
}