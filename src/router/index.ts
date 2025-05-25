import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Speakers from '@/views/Speakers.vue'
import Partners from '@/views/Partners.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Ana Sayfa' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'Hakkımızda' }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers,
      meta: { title: 'Konuşmacılar' }
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners,
      meta: { title: 'Paydaşlar' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'İletişim' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Vision Fest 2025` : 'Vision Fest 2025'
  next()
})

export default router
  