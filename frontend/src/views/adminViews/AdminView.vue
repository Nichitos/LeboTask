<template>
<v-layout class='back'>
   <sideMenuComp />
   <router-view />
   </v-layout>
</template>

<script lang="ts">
import sideMenuComp from '@/components/sideMenuComponent.vue'
import systemView from '@/views/adminViews/adminSystemView.vue'
import personnelView from '@/views/adminViews/adminPersonnelView.vue'
import usersView from '@/views/adminViews/adminUsersView.vue'


  export default {
    name: 'AdminView',
    components: {
    sideMenuComp
  }
}
</script>

<style scoped>
.back {
  background-image: url("https://i.redd.it/a8ooenc6xnt01.jpg");
  background-size: 100%;
}

</style>



