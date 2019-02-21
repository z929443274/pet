import request from '../utils/request';

//分页查询
export function getToyByPageAsync({currentPage=1,eachPage=5} = {}) {
  return request(`/toy/getToyByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

//删除
export function delToy(_id){
    return request('/toy/removeToy',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

//新增
export function addToy({name,texture,fit,impact,place,price,supplier,state,count}){
    return request('/toy/addToy',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,texture,fit,impact,place,price,supplier,state,count})
    })
}

//确认修改
export function updateToy({_id,name,texture,fit,impact,place,price,supplier,count}){
    return request('/toy/updateToy',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,name,texture,fit,impact,place,price,supplier,count})
    })
}
