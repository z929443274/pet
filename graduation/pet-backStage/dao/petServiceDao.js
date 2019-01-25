const {
    petServiceModel
  } = require("./models/petServiceModel");
  
  
  module.exports.register = async function (user) {
    return await petServiceModel.create(user)
  }