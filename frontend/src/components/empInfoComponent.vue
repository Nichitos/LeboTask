<template>
<v-card hover>
          <v-layout align-center>
            <v-card-title primary-title>
              <div>
                <h3 class="mb-3 ml-3 mr-4 display-2">{{ User.name }} {{ User.surname }}</h3>
                <div>
                  <ul>
                    <li class="title ma-2">Vârsta: {{ User.age}}</li>
                    <li class="title mb-2 ml-2">Email: {{ User.email}}</li>
                    <li class="title mb-2 ml-2">Salariu: {{ User.salary}}</li>
                    <li class="title mb-2 ml-2">Funcția: {{ User.position}}</li>
                  </ul>
                </div>
              </div>
            </v-card-title>
          </v-layout>
        </v-card>
</template>

<script lang="ts">

export default {
    name: 'empInfoComponent',
    data: () => ({
    User: {
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
    }),
    mounted() {
     this.User = this.$store.getters.USER
  }
}

</script>