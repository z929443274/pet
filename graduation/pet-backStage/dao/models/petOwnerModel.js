const  mongoose = require('mongoose');

const petOwnerSchema = new mongoose.Schema({
         orderId:{ 
            type:mongoose.Schema.Types.ObjectId,
            ref:"orderModel" 
         },                          //订单
         name:String ,     //名字
         nickName:String,      //昵称
         storefrontId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"storefrontModel"
         } ,     //会员卡
         address:String ,     //送货地址
         integral:String,        //积分
         petsId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"petsModel"
          },                   //拥有宠物
})

mongoose.model("petOwnerModel", petOwnerSchema, "petOwner");
module.exports.petOwnerModel = mongoose.model("petOwnerModel");