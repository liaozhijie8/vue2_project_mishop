export const getUrl = (val) => {
  if (val !== undefined) {
    const res = JSON.parse(JSON.stringify(val))
    return res.url
  }
}
