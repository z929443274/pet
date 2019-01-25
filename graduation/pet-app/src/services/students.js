import request from '../utils/request';

export function getStudentByPageAsync({ page = 1, max = 5 } = {}) {
  return request(`/students/getData?page=${page}&max=${max}`);
}

export function  searchStudentAsync({ type,search,max } = {}) {
  console.log(type,search,max)
  var addData = {
    method: "post",   //请求方法
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type,search,max }),  //请求体

  }
  return request(`/students/getAllData`, addData);
}



