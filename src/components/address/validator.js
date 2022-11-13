export const validatePhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('手机号不能为空！'))
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    callback(new Error('手机号不正确！'))
  } else {
    callback()
  }
}

// 处理地址格式
export const formatAddress = (val) => {
  const { province, city, district, detail } = val
  const address = province + ' ' + city + ' ' + district + ' ' + detail
  return address
}
