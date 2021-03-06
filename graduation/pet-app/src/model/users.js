import {loginAsync, registerAsync, isRepeatAsync} from '../services/users'
export default {
    namespaced:true,
    state:{
        userName:'',
        password:'',
        isLogin:false,
        state:"open",
        type:""
    },
    mutations:{

    },
    actions: {
        loginAsync:async({commit,state},payload) => {
            return await loginAsync({
                userName:payload.userName,
                password:payload.password,
                type:payload.type
            })
           // commit("checkLogin",data)
        },
        registerAsync:async({commit,state},payload) => {
            const {data} = await registerAsync({
                userName:payload.userName,
                password:payload.password,
                type:payload.type
            });
            
        },
        isRepeatAsync:async({commit,state},payload) => {
            const{data} = await isRepeatAsync({
                userName:payload.userName
            })
        }
    }
}