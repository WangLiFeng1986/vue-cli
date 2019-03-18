import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/tabbar/HomeContent'
import member from '@/components/tabbar/MemberContent'
import search from '@/components/tabbar/SearchContent'
import shopCar from '@/components/tabbar/ShopCarContent'
import newsList from '@/components/News/NewsList'
import newsInfo from '@/components/News/NewsInfo'
import photoList from '@/components/Photos/photoList'
import goodsList from '@/components/goods/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',component:home },
    { path:'/home/newsList',component:newsList},
    { path:'/home/newsInfo/:id',component:newsInfo},
    { path:'/home/photoList',component:photoList},
    { path:'/home/goodsList',component:goodsList},
    { path:'/home',component:home },
    { path:'/member',component:member },
    { path:'/search',component:search },
    { path:'/shopCar',component:shopCar }
  ]
})
