const  mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
         name:String ,     //名字
         address:String,      //地址
         tel:String ,     //电话
         img:String,        //图片
})

mongoose.model("supplierModel", supplierSchema, "supplier");
module.exports.supplierModel = mongoose.model("supplierModel");