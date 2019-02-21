const{ foodModel } = require("./models/foodModel");


//分页查询
module.exports.getFoodByPage = async function({currentPage,eachPage}){
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let totalNum = await foodModel.countDocuments({state:"open"});  //总条数
    let totalPage = Math.ceil( totalNum / eachPage );  //  总页数
    let data = await foodModel
    .find({state:"open"})
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage)
    return {currentPage,eachPage,totalPage,totalNum,data}
}


//删除
module.exports.removeFood = async function(_id){
    return await foodModel.update({_id},{state:"close"});
}


//新增
module.exports.addFood = async function(food){
    return await foodModel.create(food);
}



//确认修改
module.exports.updateFood = async function({_id,name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count}){
    return await foodModel.update({_id},{name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count});
}