// 跳转动态路由打开新窗口
import router from '@/router'
export const openNewPage = (val) => {
  const routeUrl = router.resolve({
    path: val
  })
  window.open(routeUrl.href, '_blank')
}
