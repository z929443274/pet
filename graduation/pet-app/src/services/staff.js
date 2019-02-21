import request from '../utils/request';


export function addStaffAsync(newStaff) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaff),  //请求体
    
      }
  return request('/staff/addStaff',addData);
  }


export function getStaffByPageAsync({currentPage=1,eachPage=10,usersId}={}) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({currentPage,eachPage,usersId}),  //请求体
    
      }
  return request('/staff/getStaffData',addData);
  }

  export function getAllStaffDataAsync({usersId}={}) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({usersId}),  //请求体
    
      }
  return request('/staff/getAllStaffData',addData);
  }

  export function updateStaffAsync(newStaff) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaff),  //请求体
    
      }
  return request('/staff/updateStaff',addData);
  }
  
  export function removeStaffAsync(id) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),  //请求体
    
      }
  return request('/staff/removeStaff',addData);
  }

