import store from '@/store'

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

// 处理传入修改框的数据
export const formatUpdate = () => {
  const { address, phone, consigness, id } = store.state.address.updateList[0]
  const addressArray = address.split(' ')
  const ruleForm = {
    name: consigness,
    phone,
    province: addressArray[0],
    city: addressArray[1],
    district: addressArray[2],
    detail: addressArray[3],
    id
  }
  return ruleForm
}
// 初始默认的数据格式
export const RULE_FORM = {
  name: '',
  phone: '',
  // 省
  province: '',
  // 市
  city: '',
  // 区
  district: '',
  // 详细地址
  detail: ''
}
