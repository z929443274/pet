const{ toyModel } = require("./models/toyModel");


//分页查询
module.exports.getToyByPage = async function({currentPage,eachPage}){
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let totalNum = await toyModel.countDocuments({state:"open"});  //总条数
    let totalPage = Math.ceil( totalNum / eachPage );  //  总页数
    let data = await toyModel
    .find({state:"open"})
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    return {currentPage,eachPage,totalPage,totalNum,data}
}


//删除
module.exports.removeToy = async function(_id){
    return await toyModel.update({_id},{state:"close"});
}


//新增
module.exports.addToy = async function(toy){
    return await toyModel.create(toy);
}



//确认修改
module.exports.updateToy = async function({_id,name,texture,fit,impact,place,price,supplier,count}){
    return await toyModel.update({_id},{name,texture,fit,impact,place,price,supplier,count});
}