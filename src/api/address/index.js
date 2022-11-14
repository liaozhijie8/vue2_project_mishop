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

// 更新地址
export const updateAddress_api = (id, data) => {
  return request({
    url: `/address/update/${id}`,
    method: 'PUT',
    data
  })
}
// 删除地址
export const deleteAddress_api = (id) => {
  return request({
    url: `/address/delete/${id}`,
    method: 'DELETE'
  })
}
