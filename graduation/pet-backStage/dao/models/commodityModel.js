const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
    toyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "toyModel"
    }, //玩具
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodModel"
    }, //玩具
    showerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "showerModel"
    }, //玩具
})

mongoose.model("commodityModel", commoditySchema, "commodity");
module.exports.commodityModel = mongoose.model("commodityModel");