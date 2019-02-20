const {
    usersModel
} = require("./models/usersModel")


module.exports.login = async function(userName,password){
    return await usersModel.find({userName,password})
}

module.exports.Register = async function ({userName,password}){
    return await usersModel.create({userName,password,state:"open"})
}

module.exports.repeat = async function (userName) {
    return await usersModel.find(userName)
  }