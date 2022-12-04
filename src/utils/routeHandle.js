// 跳转动态路由打开新窗口
import router from '@/router'
export const openNewPage = (val) => {
  const routeUrl = router.resolve({
    path: val
  })
  window.open(routeUrl.href, '_blank')
}
// 判断设备访问
export const _isMobile = () => {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return flag
}
