import request from '../utils/request';

export function loginAsync({username,password}) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,password}),  //请求体
    
      }
  return request('/users/login',addData);
}

export function registerAsync({username,password}) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username,password}),  //请求体
  
    }
return request('/users/register',addData);
}

export function isRepeatAsync({username}) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username}),  //请求体
  
    }
return request('/users/isRepeat',addData);
}


