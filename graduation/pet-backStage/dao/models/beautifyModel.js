const  mongoose = require('mongoose');

const beautifySchema = new mongoose.Schema({
         schedule:Array,     //排期
         fit:String,      //适用规格
         kind:String ,     //服务规格
         price:String ,     //价格
         state:String,
})

mongoose.model("beautifyModel", beautifySchema, "beautify");
module.exports.beautifyModel = mongoose.model("beautifyModel");