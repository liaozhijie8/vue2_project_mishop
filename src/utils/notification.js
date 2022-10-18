/* 成功的通知 */
export function notification(window, title, message, type) {
  if (type === 'success') {
    return window.$notify({
      title,
      message,
      type: 'success'
    })
  }
  if (type === 'error') {
    return window.$notify.error({
      title,
      message
    })
  }
}
