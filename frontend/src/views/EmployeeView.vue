<template>
<v-layout  justify-start column fill-height class='back'>
  <v-container fluid >
    <v-layout>
      <v-flex xs4>
        <empInfoComp />
        <!-- deadline comp -->
        <v-layout>
         <deadlineComp />
        </v-layout>
        <!-- deadline comp -->
      </v-flex>

<!-- tasks comp -->
      <v-layout class="ml-4">
        <tasksComp />
      </v-layout>
      <!-- tasks comp -->
    </v-layout>
  </v-container>
  </v-layout>
</template>

<script lang="ts">
import deadlineComp from '../components/deadlineComponent.vue'
import empInfoComp from '../components/empInfoComponent.vue'
import tasksComp from '../components/tasksComponent.vue'

export default {
  name: 'EmployeeView',
  components: {
    deadlineComp, empInfoComp, tasksComp
  }
}
</script>

<style scoped>
.back {
  background-image: url("https://i.redd.it/a8ooenc6xnt01.jpg");
  background-size: 100%;
}

</style>

