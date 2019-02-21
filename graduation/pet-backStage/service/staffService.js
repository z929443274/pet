const {addStaff,getStaffData,updateStaff,removeStaff,getAllStaffData} = require("../dao/staffDao");


module.exports.addStaff = async function (newStaff){
    return await addStaff(newStaff)
}



module.exports.getStaffData = async function (staffData){
    return await getStaffData(staffData)
}

module.exports.getAllStaffData = async function (usersId){
    return await getAllStaffData(usersId)
}

module.exports.updateStaff = async function (newStaff){
    return await updateStaff(newStaff)
}

module.exports.removeStaff = async function (id){
    return await removeStaff(id)
}