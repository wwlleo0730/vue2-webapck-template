import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello1
    },
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
})
