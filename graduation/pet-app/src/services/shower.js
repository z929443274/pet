import request from '../utils/request';

//分页查询
export function getShowerByPageAsync({currentPage=1,eachPage=5} = {}) {
  return request(`/shower/getShowerByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

//删除
export function delShower(_id){
    return request('/shower/removeShower',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

//新增
export function addShower({name,fit,packing,impact,date,expirationDate,place,price,supplier,state,count}){
    return request('/shower/addShower',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,fit,packing,impact,date,expirationDate,place,price,supplier,state,count})
    })
}

//确认修改
export function updateShower({_id,name,fit,packing,impact,date,expirationDate,place,price,supplier,count}){
    return request('/shower/updateShower',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,name,fit,packing,impact,date,expirationDate,place,price,supplier,count})
    })
}
