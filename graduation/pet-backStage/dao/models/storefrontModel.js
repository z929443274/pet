const mongoose = require('mongoose');

const storefrontSchema = new mongoose.Schema({
  name: String, //门店名
  address: String, //地址
  state: String, //删除状态
  tel: String, //电话
  imgUrl: Object, //门店图片
  administrator: String, //门店管理员
  ratio: String, //佣金比例
  intro: String, //门店简介
  petServiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "petServiceModel"
  }, //服务ID
  sellPetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sellPetModel"
  }, //出售宠物
  usersId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersModel"
  },
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "staffModel"
  },
})

mongoose.model("storefrontModel", storefrontSchema, "storefront");
module.exports.storefrontModel = mongoose.model("storefrontModel");