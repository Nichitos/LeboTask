<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex lg4>
      <v-snackbar class="mb-4s" v-model="snackbar">
        {{ snackbarText }}
        <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <v-card hover>
        <!-- Name Field -->
        <v-text-field
          class="ma-4"
          ref="name"
          v-model="credentialsSignup.name"
          :error-messages="errorMessages"
          label="Name"
          required
          clearable
        ></v-text-field>

        <!-- Nickname Field -->
        <v-text-field
          class="ma-4"
          ref="Surname"
          v-model="credentialsSignup.surname"
          :error-messages="errorMessages"
          label="Surname"
          required
          clearable
        ></v-text-field>
        <v-text-field
          class="ma-4"
          ref="Age"
          v-model="credentialsSignup.age"
          :error-messages="errorMessages"
          label="Age"
          required
          clearable
        ></v-text-field>
        <v-text-field
          class="ma-4"
          ref="Salary"
          v-model="credentialsSignup.salary"
          :error-messages="errorMessages"
          label="Salary"
          required
          clearable
        ></v-text-field>
        <!-- Registration Field -->
        <v-text-field
          class="ma-4"
          ref="E-mail"
          v-model="credentialsSignup.email"
          label="E-mail"
          clearable
        ></v-text-field>
        <v-text-field
          class="ma-4"
          ref="Position"
          v-model="credentialsSignup.position"
          label="Position"
          clearable
        ></v-text-field>
        <!-- Password Field -->
        <v-text-field
          class="ma-4"
          ref="Password"
          v-model="credentialsSignup.password"
          :type="'password'"
          label="Password"
          clearable
        ></v-text-field>
        <!-- Password Confirmation Field -->
        <v-text-field
          class="ma-4"
          ref="Password"
          v-model="credentialsSignup.confirmPassword"
          :type="'password'"
          label="Confirm Password"
          clearable
        ></v-text-field>
        <!-- Sign up Button -->
        <div class="text-xs-center">
          <v-btn flat clearable v-on:click="submitSignUp()">Sign up</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import axios from "axios";
const API_URL = "http://localhost:8080";
const SIGNUP_URL = API_URL + "/register";
import registerApi from "../api/registerApi"

export default {
  name: "signupComponent",
  data: () => ({
    credentialsSignup: {
      email: null,
      password: null,
      name: null,
      surname: null,
      position: null,
      age: null,
      deadline: null,
      status: "user",
      tasks: null,
      salary: null,
      id: null,
      confirmPassword: null
    },
    snackbar: false,
    snackbarText: "",
    error: null,
    user: {
      authenticated: false
    }
  }), 
  methods: {
    openSnackbar(text: any) {
      this.snackbar = true;
      this.snackbarText = text;
    },
    submitSignUp() {

      registerApi.registerApi(
        this.credentialsSignup.name, 
        this.credentialsSignup.surname, 
        this.credentialsSignup.age, 
        this.credentialsSignup.salary,
        this.credentialsSignup.email, 
        this.credentialsSignup.position,
        this.credentialsSignup.password,
        this.credentialsSignup.confirmPassword)

        const emptyObj = {
          email: null,
          password: null,
          name: null,
          surname: null,
          position: null,
          age: null,
          deadline: null,
          status: "user",
          tasks: null,
          salary: null,
          id: null,
          confirmPassword: null
        };

        this.credentialsSignup = Object.assign({}, emptyObj);

        this.openSnackbar("Success !");
      }
    }
  }

</script>