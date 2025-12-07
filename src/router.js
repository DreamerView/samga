import { createRouter, createWebHistory } from 'vue-router'

// Lazy-load страниц (каждая страница → отдельный JS chunk)
const HomePage = () => import("./views/Home/Page.vue")
const AboutPage = () => import("./views/About/Page.vue")

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
