const{beautifyModel} = require("./models/beautifyModel");

module.exports.getBeautifyByPage = async function({currentPage,eachPage}){
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let count = await beautifyModel.countDocuments({state:"open"});  //总条数
    let totalPage = Math.ceil( count / eachPage );  //  总页数
    let data = await beautifyModel
    .find({state:"open"})
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    console.log(data)
    return {currentPage,eachPage,totalPage,count,data}
}

module.exports.removeBeautify = async function(_id){
    return await beautifyModel.update({_id},{state:"close"});
}

module.exports.addBeautify = async function(Beautify){
    return await beautifyModel.create(Beautify);
}

// module.exports.searchBeautify = async function({name,value}){
//     let querydata = {};
//     querydata[name] = {$regex : value};
//     querydata.state = "open";
//     return await beautifyModel.find(querydata);
// }

module.exports.updateBeautify = async function({_id,kind,fit,price,schedule}){
    return await beautifyModel.update({_id},{kind,fit,price,schedule});
}


// module.exports.newBeautify = async function(){
//     let data = await beautifyModel.find({state:"open"});
//     return data;
// }

// module.exports.search1 = async function({type,value}){
//     let querydata = {};
//     querydata[type] = {$regex : value};
//     querydata.state = "open";
//  let data = await beautifyModel.find(querydata);
//  return data;
//   }

//   module.exports.getBeautify = async function (){
//     let data = await beautifyModel.find({state:"open"});
//     return data;
//   }

//   module.exports.getBeautifyOne = async function (_id){
//     let data = await beautifyModel.find({_id,state:"open"});
//     return data;
//   }