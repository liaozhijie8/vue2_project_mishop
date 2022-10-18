/* 存取数据 */
export const setItem = (key, value) => {
  // 复杂数据类型需要进行转换
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/* 获取数据 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/* 删除指定数据 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/* 删除所有数据 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
