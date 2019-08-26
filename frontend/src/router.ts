import Vue from 'vue';
import Router from 'vue-router';
import AdminView from './views/AdminView.vue';
import EmployeeView from './views/EmployeeView.vue';
import LoginView from './views/LoginView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {transitionName: 'slide'},
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView,
      meta: {transitionName: 'slide'},
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {transitionName: 'slide'},
    },
  ],
});
