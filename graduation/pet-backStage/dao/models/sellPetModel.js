const  mongoose = require('mongoose');

const sellPetSchema = new mongoose.Schema({
         classify:String ,     //种类：柯基，牧羊
         type:String,      //品类：猫，狗
         color:String ,     //颜色
         date:String ,     //出生日期
         character:String,        //性格
         price:String ,       //价格
          img:String ,          //图片
})

mongoose.model("sellPetModel", sellPetSchema, "sellPet");
module.exports.sellPetModel = mongoose.model("sellPetModel");