import Vue from 'vue';
import Router from 'vue-router';
import AdminView from './views/adminViews/AdminView.vue';
import EmployeeView from './views/employeeViews/EmployeeView.vue';
import LoginView from './views/otherViews/LoginView.vue'
import aUsersView from './views/adminViews/adminUsersView.vue';
import aPersonnelView from './views/adminViews/adminPersonnelView.vue';
import aSystemView from './views/adminViews/adminSystemView.vue';


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
      path: '/admin/',
      name: 'admin',
      component: AdminView,
      meta: {transitionName: 'slide'},
      children: [
        {
          path: '',
          name: 'users',
          component: aUsersView,
          meta: {transitionName: 'slide'},
        },
        {
          path: '/system',
          name: 'system',
          component: aSystemView,
          meta: {transitionName: 'slide'},
        },
        {
          path: '/personnel',
          name: 'personnel',
          component: aPersonnelView,
          meta: {transitionName: 'slide'},
        },
      ],
    },
    
  ],
});
