const {
    login,
    Register,
    repeat,
    remove
} = require ("../dao/usersDao")

//登录
module.exports.login = async function (userName,password,type){
    let data = await login(
        userName,
        password,
        type
    );
    console.log(data)
    if (data.length > 0) {
        return data;
    } else {
        return "";
    }
}

//注册
module.exports.Register = async function ({userName,password,type}){
    
    let data= await Register({userName,password,type})
    return data;
}

//验重
module.exports.repeat = async function (userName) {
    // let data = await repeat(userName);
    // if (data.length > 0) {
    //     for (let item of data) {
    //         console.log(data)
            // if (item.state == "person") {
            //     return {ha: "one"}
            // }
            // return { ha: 'two'}
    //     }
    // } 
    // else {return {ha: 'false'}
    // }
    let data = await repeat(userName);
    console.log(data);
    return data;
}
