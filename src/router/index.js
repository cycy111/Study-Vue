import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { from } from 'core-js/fn/array'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children:[
      {
        path: '/admin/course/:name',
        name:'detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')

      }
    ],
    meta:{
      auth:true
    },
    //路由独享守卫
    // beforeEnter(to, from, next)  {
        
    //       if (window.isLogin) {
    //         next()
    //       } else {
    //         next('/login?redirect='+to.fullPath)
    //       }
          
    // }
  },
  {
    path: '/admin/course/:name',
    // name:'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')

  },
  {
    // 会匹配所有路径
    path: '*',
    component: () => import('../views/404.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局守卫  
// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//   if (window.isLogin) {
//   next()
//   } else {
//   next('/login?redirect='+to.fullPath)
//   }
//   } else {
//   next()
//   }
//   })
export default router
