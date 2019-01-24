const  mongoose = require('mongoose');

const trusteeshipSchema = new mongoose.Schema({
         schedule:String ,     //排期
         fit:String,      //适用规格
         timer:String ,     //耗时
         price:String ,     //价格
})

mongoose.model("trusteeshipModel", trusteeshipSchema, "trusteeship");
module.exports.trusteeshipModel = mongoose.model("trusteeshipModel");