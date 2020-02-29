import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/strategies/:type',
    name: 'strategy',
    component: () => import(/* webpackChunkName: "strategy" */ '../views/Strategy.vue'),
    beforeEnter(to, from, next) {
      if (store.state.strategies[to.params.type]) return next();
      next({ name: 'home' });
    },
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
