<template >
  <v-layout justify-start column fill-height class="back">
  <LoginComp />    
    <v-layout align-center justify-center row fill-height>
      <SignUpComp />
    </v-layout>  
  </v-layout>
</template>

<script lang="ts">
import SignUpComp from '../components/signupComponent.vue'
import LoginComp from '../components/loginComponent.vue'

export default {
  name: "LoginView",
  components: {
    SignUpComp, LoginComp
  },
};
</script>

<style scoped>
.back {
  background-image: url("https://i.redd.it/a8ooenc6xnt01.jpg");
  background-size: 100%;
}
</style>
