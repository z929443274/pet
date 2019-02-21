import request from '../utils/request';


export function addStorefrontAsync(newStorefront) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStorefront),  //请求体
  
    }
return request('/storefront/addStorefront',addData);
}


export function getStorefrontByPageAsync({currentPage=1,eachPage=10,usersId}={}) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({currentPage,eachPage,usersId}),  //请求体
  
    }
return request('/storefront/getStorefrontData',addData);
}


export function updateStorefrontAsync(newStorefront) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStorefront),  //请求体
  
    }
return request('/storefront/updateStorefront',addData);
}

export function removeStorefrontAsync(id) {
  var addData = {
      method: "post",   //请求方法
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),  //请求体
  
    }
return request('/storefront/removeStorefront',addData);
}