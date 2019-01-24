const  mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
         name:String ,     //名字
         texture:String,      //材质
         fit:String ,     //适用规格
         exclusive:String ,     //专属规格
         impact:String,        //功用
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

mongoose.model("toyModel", toySchema, "toy");
module.exports.toyModel = mongoose.model("toyModel");