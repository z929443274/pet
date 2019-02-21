const { getFoodByPage,  removeFood, addFood, updateFood } = require("../dao/foodDao");


//分页查询
module.exports.getFoodByPage = async function(page){
   return await getFoodByPage(page);
}


//删除
module.exports.removeFood = async function(_id){
    return await removeFood(_id);
}


//新增
module.exports.addFood = async function(food){
    return await addFood(food);
    
}


//确认修改
module.exports.updateFood = async function(food){
    return await updateFood(food);
}



