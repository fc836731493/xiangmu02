import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Children from '@/pages/children'
import Car from "@/pages/son/car"
import Loud from "@/pages/son/loud"
import Earth from "@/pages/son/earth"
import Hill from "@/pages/son/hill"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/children',
      name: 'Children',
      component: Children,
      children: [
        { 
          path: 'car', 
          name:"car",
          component: Car 
        },
        { 
          path: 'earth', 
          name:"earthr",
          component: Earth 
        },
        { 
          path: 'loud', 
          name:"loud",
          component: Loud 
        },
        { 
          path: 'hill', 
          name:"hill",
          component: Hill 
        }
      ]
    }
  ]
})
