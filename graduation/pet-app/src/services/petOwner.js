import request from '../utils/request';

export function getOwnerByPageAsync({ curPage = 1, eachPage = 5 } = {}) {
  return request(`/petOwner/getData?curPage=${curPage}&eachPage=${eachPage}`);
}
