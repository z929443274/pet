const {petOwnerModel} = require("./models/petOwnerModel");

module.exports.addOwner=async function (data) {
  return await petOwnerModel.create(data);
}


module.exports.getData = async function ({curPage,eachPage}) {
  curPage = parseInt(curPage);
  eachPage = parseInt(eachPage);
 let count = await petOwnerModel.countDocuments()-0;
 let totalPage =Math.ceil(count / eachPage)-0;
  let data = await  petOwnerModel
                   .find()                
                   .skip((curPage-1)*eachPage)
                   .limit(eachPage)
  return {curPage,eachPage,totalPage,count,data}
}