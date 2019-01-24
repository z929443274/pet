const  mongoose = require('mongoose');

const petServiceSchema = new mongoose.Schema({
          beautifyId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"beautifyModel"
          },
          trusteeshipId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"trusteeshipModel"
          }
})

mongoose.model("petServiceModel", petServiceSchema, "petService");
module.exports.petServiceModel = mongoose.model("petServiceModel");