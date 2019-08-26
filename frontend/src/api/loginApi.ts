import axios from "axios";
import router from "../router";
import store from "../store";
export default {

loginApi: (email: null, password: null) => {
  
const API_URL = "http://localhost:8080";
const LOGIN_URL = API_URL + "/login";
//const router = require("../router");

let receivedCredentials = {
  email: null,
  name: null,
  surname: null,
  position: null,
  age: null,
  deadline: null,
  status: null,
  tasks: null,
  salary: null
};

    axios
    .post(LOGIN_URL, {
      email: email,
      password: password
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data.token);
      receivedCredentials = response.data.dataValues;
      //this.credentialsLogin.email = null;
      //this.credentialsLogin.password = null;
      console.log(response.data.dataValues);
    
      if (receivedCredentials.status === "admin") {
        router.push({ path: "/admin" });
        console.log('admin')
      } else {
        router.push({ path: "/employee" });
        store.commit("SET_USER", receivedCredentials);
        console.log('user')
      }
    
      //this.openSnackbar("Logged in");
    })
    .catch(errors => {
      console.log("Cannot login");
      //this.openSnackbar("Failed to login");
      console.log(errors);
    });
}


}