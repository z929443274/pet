const  mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
         name:String ,     //名字
         make:String,      //制作
         fit:String ,     //适用规格
         exclusive:String ,     //专属规格
         packing:String,        //包装规格
         taste:String,        //口味
         place:String,        //产地
         date:String,         //出厂日期
         expirationDate:String,    //保质期
         price:String ,       //价格
         count:Number ,  //售出数量
         serialNumber:Number,     //上架序号
         supplierId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"supplierModel"
          },                   //供应商
          img:String ,          //图片
})

mongoose.model("foodModel", foodSchema, "food");
module.exports.foodModel = mongoose.model("foodModel");