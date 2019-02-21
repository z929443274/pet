const {petOwnerModel} = require("./models/petOwnerModel");

module.exports.addOwner=async function (data) {
  return await petOwnerModel.create(data);
}


module.exports.getData = async function ({pageSize,eachPage}) {
  pageSize = parseInt(pageSize);
  eachPage = parseInt(eachPage);
 let count = await petOwnerModel.countDocuments()-0;
 let totalPage =Math.ceil(count / eachPage)-0;
  let data = await  petOwnerModel
                   .find()                
                   .skip((pageSize-1)*eachPage)
                   .limit(eachPage)
  return {pageSize,eachPage,totalPage,count,data}
}