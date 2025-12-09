import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Lazy-load страниц (каждая страница → отдельный JS chunk)
const HomePage = () => import("./views/Home/Page.vue")
const AboutPage = () => import("./views/About/Page.vue")
const SignInPage = () => import("./views/Sign-In/Page.vue")
const SignUpPage = () => import("./views/Sign-Up/Page.vue")

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: true }   // 🔐 ДОБАВИЛ защиту!
  },

  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { requiresAuth: true }   // Можешь убрать если about публичный
  },

  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInPage,
    meta: { guest: true }   // Только для НЕ авторизованных
  },

  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpPage,
    meta: { guest: true }   // Только для гостей
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// ----------------------------------------
// 🔥 Global Route Guard
// ----------------------------------------
router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  // Если store ещё загружается — ждём init()
  if (auth.loading) {
    await auth.init()
  }

  const isLoggedIn = !!auth.user

  // 🔐 Страница требует авторизации
  if (to.meta.requiresAuth && !isLoggedIn) {
    return next('/sign-in')
  }

  // 🚫 Страница только для гостей
  if (to.meta.guest && isLoggedIn) {
    return next('/')
  }

  next()
})

export default router