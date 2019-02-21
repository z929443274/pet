import request from '../utils/request';

export function getOwnerByPageAsync({ pageSize=1, eachPage=5 } = {}) {
  return request(`/petOwner/getData?pageSize=${pageSize}&eachPage=${eachPage}`);
}


export function addOwnerAsync(data) {
    var addData = {
        method: "post",   //请求方法
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  //请求体
    
      }
  return request('petOwner/addOwner',addData);
}