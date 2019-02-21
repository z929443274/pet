const { getToyByPage,  removeToy, addToy, updateToy } = require("../dao/toyDao");


//分页查询
module.exports.getToyByPage = async function(page){
   return await getToyByPage(page);
}


//删除
module.exports.removeToy = async function(_id){
    return await removeToy(_id);
}


//新增
module.exports.addToy = async function(Toy){
    return await addToy(Toy);
    
}


//确认修改
module.exports.updateToy = async function(Toy){
    return await updateToy(Toy);
}



