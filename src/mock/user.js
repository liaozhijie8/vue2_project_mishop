import Mock from 'mockjs'
Mock.mock('/api/test', {
  code: 2,
  message: 'test请求成功',
  result: {
    id: 2,
    name: 'leon'
  }
})
