<template>
<v-layout justify-start column fill-height class='back'> 
   <adminComp />
</v-layout>
</template>

<script lang="ts">
import adminComp from '../components/adminComponent.vue'

  export default {
    name: 'AdminView',
    components: {
    adminComp
  }
}
</script>

<style scoped>
.back {
  background-image: url("https://i.redd.it/a8ooenc6xnt01.jpg");
  background-size: 100%;
}

</style>



