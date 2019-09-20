<template>
<v-navigation-drawer dark>

  
    <v-btn to='/admin/system'> system </v-btn>
 

  
    <v-btn to='/admin/personnel'> personnel </v-btn>

 

  
    <v-btn to='/admin/users'> users </v-btn>
 
</v-navigation-drawer>
</template>

<script lang="ts">
//import router from "@/router.ts";
//const router = require("@/router")
export default {
    name: 'sideMenuComponent',
}

</script>