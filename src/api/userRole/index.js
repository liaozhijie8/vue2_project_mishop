import request from '@/utils/request'

/* 添加用户角色账户 */
export const addUserRole = (id) => {
  return request({
    url: `/user-role/add/${id}`,
    method: 'POST'
  })
}
