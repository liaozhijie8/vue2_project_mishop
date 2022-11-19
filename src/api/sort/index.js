import request from '@/utils/request'

// 查找所有分类
export const getSortList_api = () => {
  return request({
    url: '/sort/list',
    method: 'GET'
  })
}

// 查找某一分类的所有商品
export const getSortGoodsList_api = (id) => {
  return request({
    url: `/goods/sort/list/${id}`,
    method: 'GET'
  })
}
