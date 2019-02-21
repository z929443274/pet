import request from '../utils/request';

export function getTrusteeshipByPageAsync({currentPage=1,eachPage=5} = {}) {
  return request(`/trusteeship/getTrusteeshipByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

export function removeTrusteeship(_id){
    return request('/trusteeship/removeTrusteeship',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

export function addTrusteeship({timer,fit,price,schedule,state}){
    return request('/trusteeship/addTrusteeship',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({timer,fit,price,schedule,state})
    })
}

export function updateTrusteeship({_id,timer,fit,price,schedule}){
    return request('/trusteeship/updateTrusteeship',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,timer,fit,price,schedule})
    })
}
