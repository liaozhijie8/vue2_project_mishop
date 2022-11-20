export const getUrl = (val) => {
  if (val !== undefined) {
    const res = JSON.parse(JSON.stringify(val))
    return res.url
  }
}

// 把对象转化为数组
export const objectToArray = (val) => {
  const temp = []
  for (const key in val) {
    temp.push(val[key])
  }

  return temp
}

// 处理价格
export const priceHandle = (val, name) => {
  let temp = 0
  val.forEach((item) => {
    temp += item[name]
  })
  return temp
}
