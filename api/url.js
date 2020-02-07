/**
 * 用户相关的URL
 */
export const user = {
  login: '/user/login',
  logout: '/user/logout',
  register: '/user/register',
  verify: '/user/verify',
  chkcode: '/user/chkCode',
  sendpwd: '/user/password',
  resetpwd: '/user/resetPwd',
  tabupdate: '/user/info',

}

/**
 * 菜单相关的URL
 */
export const menu = {
  navItems: '/menu/navItems',
  tabItems: '/menu/tabItems'
}

/**
 * 商品相关的URL
 */
export const goods = {
  carouselItems: '/goods/carouselItems',
  goodsItems: '/goods/${type}/list/${orderBy}/${keywords}',
  list: '/goods/list/',
  tips: '/goods/tips/'
}

/**
 * 秒杀商品相关的URL
 */
export const seckill = {
  slide: '/seckill/slide',
  list: '/seckill/list'
}

export const favorite = {
  fav: '/favorite/list/',
  delFav: '/favorite/',
  addFav: '/favorite'
}
