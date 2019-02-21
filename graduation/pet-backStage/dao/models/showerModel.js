const  mongoose = require('mongoose');

const showerSchema = new mongoose.Schema({
         name:String ,     //名字
         fit:String ,     //适用规格
         packing:String ,     //商品规格
         impact:String,        //功用
         place:String,        //产地
         date:String,         //出厂日期
         expirationDate:String,    //保质期
         price:String ,       //价格
         state: String, //状态
         supplier: String, //供应商
         count:Number ,  //售出数量
         img:String ,          //图片
})

mongoose.model("showerModel", showerSchema, "shower");
module.exports.showerModel = mongoose.model("showerModel");