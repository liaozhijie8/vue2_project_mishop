import request from '@/utils/request'

// 查找商品
export const getGoodsInfo_api = (id) => {
  return request({
    url: `/goods/get/${id}`,
    method: 'GET'
  })
}
// 获取所有商品
export const getAllGoods_api = () => {
  return request({
    url: '/goods/list',
    method: 'GET'
  })
}
