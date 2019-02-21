const{ showerModel } = require("./models/showerModel");


//分页查询
module.exports.getShowerByPage = async function({currentPage,eachPage}){
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let totalNum = await showerModel.countDocuments({state:"open"});  //总条数
    let totalPage = Math.ceil( totalNum / eachPage );  //  总页数
    let data = await showerModel
    .find({state:"open"})
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    return {currentPage,eachPage,totalPage,totalNum,data}
}


//删除
module.exports.removeShower = async function(_id){
    return await showerModel.update({_id},{state:"close"});
}


//新增
module.exports.addShower = async function(shower){
    return await showerModel.create(shower);
}



//确认修改
module.exports.updateShower = async function({_id,name,fit,packing,impact,date,expirationDate,place,price,supplier,count}){
    return await showerModel.update({_id},{name,fit,packing,impact,date,expirationDate,place,price,supplier,count});
}