<template>
  <v-app>
      <!--<transition name="fade" mode="out-in">-->
      <router-view />
    <Footer />
  </v-app>
</template>

<script>
import AdminView from './views/AdminView.vue';
import EmployeeView from './views/EmployeeView.vue';
import LoginView from './views/LoginView.vue';
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    LoginView, EmployeeView, AdminView, Footer
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

