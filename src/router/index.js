import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const Header = (resolve) => {
  import ('@/components/header/header').then((module) => {
      resolve(module)
  })
}

const NewsList = (resolve) => {
  import ('@/view/news/newsList').then((module) => {
      resolve(module)
  })
}

const NewsDetail = (resolve) => {
  import ('@/view/news/newsDetail').then((module) => {
      resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/newsList',
      redirect: '/'
    }
  ]
})
