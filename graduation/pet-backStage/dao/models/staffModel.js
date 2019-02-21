const  mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
          name:String,   //用户名
          age:String,   //密码
          state:String,      //删除状态
          gender:String,
          imgUrl:Object,
          tel:String,
          usersId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "usersModel"
          },
})

mongoose.model("staffModel", staffSchema, "staff");
module.exports.staffModel = mongoose.model("staffModel");