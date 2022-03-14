import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkNameK: "dashboard" */ '../views/Dashboard.vue'),
    },
    {
      path: '/dashboard/:category',
      name: 'dashboard',
      component: () => import(/* webpackChunkNameK: "dashboardPage" */ '../views/Dashboard.vue'),
    },
    {
      path: '/about*',
      name: 'about',
      component: () => import(/* webpackChunkNameK: "about" */ '../views/About.vue'),
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import(/* webpackChunkNameK: "404" */ '../views/NotFound.vue'),
    },
    {
      path: '/',
      redirect: {
        name: 'dashboard',
      },
    },
    {
      path: '*',
      redirect: {
        name: 'notfound',
      },
    },
  ],
});

// const user = true;
//
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'notfound' });
//   else next();
// });

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'NotFound',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
