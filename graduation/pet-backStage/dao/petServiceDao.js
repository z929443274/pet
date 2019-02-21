// const {
//     petServiceModel
//   } = require("./models/petServiceModel");
  
  
//   module.exports.register = async function (user) {
//     return await petServiceModel.create(user)
//   }
//分页
// module.exports.getAllServicesByPage = async ({ curPage, eachPage }) => {
//     const result = {
//       curPage: Number(curPage),
//       eachPage: Number(eachPage)
//     }
//     const serviceModel = mongoose.model("service");
//     result.total = await serviceModel.count(); //统计总数
//     result.maxPage = Math.ceil(result.total / result.eachPage); //总页数，ceil向下取整
//     result.rows = await serviceModel
//       .find()
//       // .populate( "classId" )
//       .skip((result.curPage - 1) * result.eachPage) //跳转，从哪里开始查
//       .limit(result.eachPage) //查询多少条
//       .sort({ _id: 1 })//升序
//     return result;
//   }
  
//   //新增
//   module.exports.addServices = async (data) => {
//     return await mongoose.model("service").create(data)
//   }
  
//   //修改页面显示
//   module.exports.upDateServicesById = async (_id) => {
//     return await mongoose
//       .model("service")
//       .find(_id)
//   }
  
//   //修改
//   module.exports.upDateServices = async ({
//     _id, serviceName, serviceType, serviceSchedule, serviceCanFor, serviceDetial, serviceTime, serviceLevel, servicePrice, serviceImg
//   }) => {
//     return await mongoose
//       .model("service")
//       .update({
//         _id
//       }, {
//           $set: {
//             serviceName, serviceType, serviceSchedule, serviceCanFor, serviceDetial, serviceTime, serviceLevel, servicePrice, serviceImg
//           }
//         });
//   }
  
//   //删除
//   module.exports.removeServices = async (data) => {
//     return await mongoose.model("service").remove(data)
//   }
  
//   //搜索
//   module.exports.searchServices = async ({ searchText, curPage, eachPage }) => {
//     const result = {
//       curPage: Number(curPage),
//       eachPage: Number(eachPage)
//     }
//     const searchArr = []
//     let reg = new RegExp(searchText, "g");
//     const searchModel = await mongoose.model("service").find();
//     searchModel.map(item => {
//       if (reg.test(item)) {
//         searchArr.push(item)
//       }
//     })
//     result.total = searchArr.length; //统计总数
//     result.maxPage = Math.ceil(result.total / result.eachPage); //总页数，ceil向下取整
//     result.rows = searchArr
//     return result;
//   }