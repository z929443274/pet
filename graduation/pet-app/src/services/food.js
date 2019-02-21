import request from '../utils/request';

//分页查询
export function getFoodByPageAsync({currentPage=1,eachPage=5} = {}) {
  return request(`/food/getFoodByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

//删除
export function delFood(_id){
    return request('/food/removeFood',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

//新增
export function addFood({name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,state,count}){
    return request('/food/addFood',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,state,count})
    })
}

//确认修改                        
export function updateFood({_id,name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count}){
    return request('/food/updateFood',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count})
    })
}
