import axios from "axios"
const API_URL = "http://localhost:8080";
const CREATE_URL = API_URL + '/create'

export default {
    createAPI: (id :null, name :null, 
                surname :null, age :null, 
                salary :null, email :null, 
                position :null, tasks :null, 
                password :null, deadline :null, 
                status :null,) => {
        axios
        .post(CREATE_URL, {
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
          console.log("Cannot login");
          console.log(errors)
        });
    }
}