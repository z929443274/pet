const  mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
         name:String ,     //名字
         shape:String,      //商品形状
         fit:String ,     //适用规格
         taste:String ,     //商品口味
         packing:String,        //包装规格
         impact:String,        //商品功用
         place:String,        //产地
         date:String,         //出厂日期
         expirationDate:String,    //保质期
         price:String ,       //价格
         state: String, //状态
         count:Number ,  //售出数量
         supplier:String, //供应商
          img:String ,          //图片
})

mongoose.model("foodModel", foodSchema, "food");
module.exports.foodModel = mongoose.model("foodModel");