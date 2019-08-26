<template>
  <v-toolbar dark>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-text-field
        xs3
        class="mx-3 form-group"
        v-model="credentialsLogin.email"
        label="Email"
        clearable
      ></v-text-field>
      <v-text-field
        xs3
        class="form-group mx-3"
        v-model="credentialsLogin.password"
        :type="'password'"
        clearable
        label="Password"
      ></v-text-field>
      <!-- Login button -->

      <v-btn flat v-on:click="submitLogin()">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import axios from "axios";
import EventBus from "../helpers/EventBus";
import router from "../router";
import store from "../store";
import loginApi from "../api/loginApi"

Vue.use(Vuetify);
const API_URL = "http://localhost:8080";
const LOGIN_URL = API_URL + "/login";

export default {
  name: "loginComponent",
  data: () => ({
    credentialsLogin: {
      email: null,
      password: null
    },
    error: null,
    user: {
      authenticated: false
    },
    snackbar: false,
    snackbarText: "",
    receivedCredentials: {
      email: null,
      name: null,
      surname: null,
      position: null,
      age: null,
      deadline: null,
      status: null,
      tasks: null,
      salary: null
    },
  }),
  methods: {
    openSnackbar(text: any) {
      this.snackbar = true;
      this.snackbarText = text;
    },
    submitLogin() {
      loginApi.loginApi(this.credentialsLogin.email, this.credentialsLogin.password)
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },
  }
};
</script>