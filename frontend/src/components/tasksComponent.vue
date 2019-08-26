<template>
<v-flex xs12>
          <v-card hover height="100%" width="100%">
            <v-layout>
              <v-card-title primary-title>
                <h3 class="mb-3 ml-3 display-2">Taskuri</h3>
              </v-card-title>
            </v-layout>
            <v-layout>
              <div>
                <ul>
                  <li class="headline ml-3">{{User.tasks}}</li>
                </ul>
              </div>
            </v-layout>
          </v-card>
        </v-flex>
</template>

<script lang="ts">

export default {
  name: 'tasksComponent',
  data() {
    return {
      User: 
      {
      email: null,
      name: null,
      surname: null,
      position: null,
      age: null,
      deadline: null,
      status: null,
      tasks: null,
      salary: null,
      }
    };
  },
  mounted() {
     this.User = this.$store.getters.USER
  }
}
</script>