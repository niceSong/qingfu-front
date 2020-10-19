import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './../views/dashboard'
import projects from './../views/projects'
import news from '../views/news'
import productDes from '../views/productDes'
import instance from '../views/instance'
import rqhis from './../views/requestHis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/dashboard/projects' },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: projects
        },
        {
          path: 'news',
          name: 'news',
          component: news
        },
        {
          path: 'productDes',
          name: 'productDes',
          component: productDes
        },
        {
          path: 'instance',
          name: 'instance',
          component: instance
        },
        {
          path: 'rqhis',
          name: 'rqhis',
          component: rqhis
        }
      ]
    }
  ]
})
