const {
    staffModel
} = require("./models/staffModel");


module.exports.addStaff = async function ({
    newStaff
}) {
    return await staffModel.create(newStaff)
}


module.exports.getAllStaffData = async function({usersId}){
return await staffModel.find({
    state: 'open',usersId
})
}
 
module.exports.getStaffData = async function ({
    currentPage,
    eachPage,usersId
}) {
    console.log(currentPage, eachPage,usersId)
    currentPage = parseInt(currentPage);
    eachPage = parseInt(eachPage);
    let count = await staffModel.countDocuments({
        state: 'open',usersId
    }); //总条数
    let totalPage = Math.ceil(count / eachPage); //总页数
    let data = await staffModel
        .find({
            state: 'open',usersId
        })
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

module.exports.updateStaff = async function ({
    newStaff
}) {
    console.log(newStaff)
    let {
        _id,
        ...rest
    } = newStaff;
    return await staffModel.updateOne({
        _id
    }, rest)
}


module.exports.removeStaff = async function ({
    id
}) {
    console.log(id)
    return await staffModel.updateOne({
        _id: id
    }, {
        state: "close"
    })
}