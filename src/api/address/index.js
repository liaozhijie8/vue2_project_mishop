import request from '@/utils/request'

// 添加地址
export const addAddress = (data) => {
  return request({
    url: '/address/add',
    method: 'POST',
    data
  })
}
// 获取地址列表
export const getAddressList = () => {
  return request({
    url: '/address/list',
    method: 'GET'
  })
}
