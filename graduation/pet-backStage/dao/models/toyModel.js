const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  name: String, //名字
  texture: String, //材质
  fit: String, //适用规格
  impact: String, //功用
  place: String, //产地
  price: String, //价格
  supplier: String, //供应商
  state: String, //状态
  count: Number, //售出数量
  img: String, //图片
})

mongoose.model("toyModel", toySchema, "toy");

module.exports.toyModel = mongoose.model("toyModel");