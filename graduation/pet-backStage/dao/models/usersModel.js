const  mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
          userName:String,   //用户名
          password:String,   //密码
          state:String,      //删除状态
          storefrontId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"storefrontModel"
          },                   //门店
          commodityId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"commodityModel"
          }                 //商品
})

mongoose.model("usersModel", usersSchema, "users");
module.exports.usersModel = mongoose.model("usersModel");