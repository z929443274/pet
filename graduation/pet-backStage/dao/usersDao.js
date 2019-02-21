const {
    usersModel
} = require("./models/usersModel")


module.exports.login = async function(userName,password,type){
    return await usersModel.find({userName,password,type})
}

module.exports.Register = async function ({userName,password,type}){
    return await usersModel.create({userName,password,type,state:"open"})
}

module.exports.repeat = async function (userName) {
    return await usersModel.find(userName)
    console.log(userName)
  }