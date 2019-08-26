import axios from "axios"

export default {


 editAPI: ( id: null, name:null, surname:null, 
            age:null,salary:null,email:null, 
            position:null,tasks:null,
            password:null,deadline:null, 
            status:null ) => {

    const API_URL = "http://localhost:8080";
    const EDIT_URL = API_URL + "/edit/";
     //const axios = require('axios')

    axios
    .put(EDIT_URL + id, {
      id: id,
      name: name,
      surname: surname, 
      age: age,
      salary: salary,
      email: email,
      position: position,
      tasks: tasks,
      password: password,
      deadline: deadline,
      status: status })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      //window.location.reload()
    })
    .catch(errors => {
      console.log(errors)
    });

 }

}

