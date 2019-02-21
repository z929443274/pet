import request from '../utils/request';

export function loginAsync({userName,password,type}) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName,password,type}),  //请求体
    
      }
  return request('/users/login',addData);
}

export function registerAsync({userName,password,type}) {
  // console.log(userName,password)
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName,password,type}),  //请求体
  
    }
return request('/users/register',addData);
}

export function isRepeatAsync({userName}) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName}),  //请求体
  
    }
return request('/users/repeat',addData);
}


