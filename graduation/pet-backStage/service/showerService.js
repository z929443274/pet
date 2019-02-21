const { getShowerByPage,  removeShower, addShower, updateShower } = require("../dao/showerDao");


//分页查询
module.exports.getShowerByPage = async function(page){
   return await getShowerByPage(page);
}


//删除
module.exports.removeShower = async function(_id){
    return await removeShower(_id);
}


//新增
module.exports.addShower = async function(shower){
    return await addShower(shower);
    
}


//确认修改
module.exports.updateShower = async function(shower){
    return await updateShower(shower);
}



