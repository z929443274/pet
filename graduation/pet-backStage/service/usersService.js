const {
    login,
    Register,
    repeat,
    remove
} = require ("../dao/usersDao")

//登录
module.exports.login = async function (userName,password){
    let data = await login(
        userName,
        password
    );
    console.log(data)
    if (data.length > 0) {
        return { isLogin: true };
    } else {
        return { isLogin: false };
    }
}

//注册
module.exports.Register = async function ({userName,password}){
    
    let data= await Register({userName,password})
    return data;
}

//验重
module.exports.repeat = async function (userName) {
    let data = await repeat(userName);
    if (data.length > 0) {
        for (let item of data) {
            console.log(data)
            // if (item.state == "person") {
            //     return {ha: "one"}
            // }
            // return { ha: 'two'}
        }
    } 
    // else {return {ha: 'false'}
    }
    // let data = await repeat(userName);
    // console.log(data);
    // return data;

