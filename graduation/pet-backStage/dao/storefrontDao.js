const {
    storefrontModel
  } = require("./models/storefrontModel");



  module.exports.addStorefront = async function ({newStorefront}) {
    console.log(newStorefront)
    return await storefrontModel.create(newStorefront)
  }


  module.exports.getStorefrontData = async function ({currentPage,eachPage,usersId}) {
console.log(currentPage,eachPage)
     currentPage = parseInt(currentPage);
  eachPage = parseInt(eachPage);
  let count = await storefrontModel.countDocuments({state:'open',usersId}); //总条数
  let totalPage = Math.ceil(count / eachPage); //总页数
  let data = await storefrontModel
    .find({state:'open',usersId}).populate("staffId")
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    console.log(data)
  return {
    count,
    totalPage,
    eachPage,
    currentPage,
    data
  };
  }

  module.exports.updateStorefront = async function ({newStorefront}) {
    console.log(newStorefront)
    let {_id,...rest}=newStorefront;
    return await storefrontModel.updateOne({_id},rest)
  }


  module.exports.removeStorefront = async function ({id}) {
    console.log(id)
    return await storefrontModel.updateOne({_id:id},{state:"close"})
  }


 