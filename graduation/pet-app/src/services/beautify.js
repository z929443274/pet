import request from '../utils/request';

export function getBeautifyByPageAsync({currentPage=1,eachPage=5} = {}) {
  return request(`/beautify/getBeautifyByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

export function removeBeautify(_id){
    return request('/beautify/removeBeautify',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

export function addBeautify({kind,fit,price,schedule,state}){
    return request('/beautify/addBeautify',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({kind,fit,price,schedule,state})
    })
}

export function updateBeautify({_id,kind,fit,price,schedule,state}){
    return request('/beautify/updateBeautify',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,kind,fit,price,schedule,state})
    })
}
