 <template>
 <v-flex xs12>
            <v-card class="mt-4" width="100%" height="100%" hover>
              <v-layout align-start>
                <v-card-title primary-title>
                  <h3 class="mb-3 ml-3 display-2">Deadline</h3>
                 
                </v-card-title>

              </v-layout>
               <div>
                    <ul>
                      <li class="headline ml-3">{{User.deadline}}</li>
                    </ul>
                  </div>
            </v-card>
          </v-flex>
</template>

<script lang="ts">

export default {
    name: 'deadlineComponent',
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