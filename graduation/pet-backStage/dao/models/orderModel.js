const  mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
         date:String ,        //订单日期
         price:String ,       //价格
          storefrontId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"storefrontModel"
          },                   //门店
          isfinished:String,    //是否完成
          evaluate:String,       //评价
})

mongoose.model("orderModel", orderSchema, "order");
module.exports.orderModel = mongoose.model("orderModel");