const{trusteeshipModel} = require("./models/trusteeshipModel");

module.exports.getTrusteeshipByPage = async function({currentPage,eachPage}){
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let count = await trusteeshipModel.countDocuments({state:"open"});  //总条数
    let totalPage = Math.ceil( count / eachPage );  //  总页数
    let data = await trusteeshipModel
    .find({state:"open"})
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    return {currentPage,eachPage,totalPage,count,data}
}

module.exports.removeTrusteeship = async function(_id){
    return await trusteeshipModel.update({_id},{state:"close"});
}

module.exports.addTrusteeship = async function(Trusteeship){
    return await trusteeshipModel.create(Trusteeship);
}

// module.exports.searchTrusteeship = async function({name,value}){
//     let querydata = {};
//     querydata[name] = {$regex : value};
//     querydata.state = "open";
//     return await trusteeshipModel.find(querydata);
// }

module.exports.updateTrusteeship = async function({_id,kind,fit,price,schedule}){
    return await trusteeshipModel.update({_id},{kind,fit,price,schedule});
}


// module.exports.newTrusteeship = async function(){
//     let data = await trusteeshipModel.find({state:"open"});
//     return data;
// }

// module.exports.search1 = async function({type,value}){
//     let querydata = {};
//     querydata[type] = {$regex : value};
//     querydata.state = "open";
//  let data = await trusteeshipModel.find(querydata);
//  return data;
//   }

//   module.exports.getTrusteeship = async function (){
//     let data = await trusteeshipModel.find({state:"open"});
//     return data;
//   }

//   module.exports.getTrusteeshipOne = async function (_id){
//     let data = await trusteeshipModel.find({_id,state:"open"});
//     return data;
//   }