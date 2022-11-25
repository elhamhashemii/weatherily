import Vue from "vue";
import VueRouter from "vue-router";

import Test from '../components/Test.vue'
import weatherApp from '../components/weatherApp.vue'
import TodayData from '../components/TodayData.vue'
import WeekData from '../components/WeekData.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: weatherApp
    },
    {
        path: '/test',
        component: Test
    },
    {
        path: '/today-data',
        component: TodayData
    },
    {
        path: '/week-data',
        component: WeekData
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router