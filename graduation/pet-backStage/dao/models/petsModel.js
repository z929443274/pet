const  mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
         name:String ,     //名称
         classify:String,      //种类：柯基，牧羊
         type:String,         //品类：猫，狗
         color:String ,     //颜色
         date:String ,     //出生日期
         character:String,        //性格
})

mongoose.model("petsModel", petsSchema, "pets");
module.exports.petsModel = mongoose.model("petsModel");