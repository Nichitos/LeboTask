import axios from "axios";

export default {
    registerApi: (name: null, surname: null, age: null, salary: null, email: null, position: null, password: null, confirmPassword: null) => {
        const API_URL = "http://localhost:8080";
        const SIGNUP_URL = API_URL + "/register";

        var id = null;
        var tasks = '';
        var deadline = '';
        var status = 'user';
    
    if (
        name === null || 
        surname === null ||
        age === null ||
        salary === null ||
        email === null ||
        position === null ||
        password === null ||
        confirmPassword === null
      ) {
        //this.openSnackbar("Failed to register");
      } else {
          
        axios
          .post(SIGNUP_URL, {
            id: id,
            name: name,
            surname: surname,
            age: age,
            salary: salary,
            email: email,
            position: position,
            tasks: tasks,
            deadline: deadline,
            password: password,
            status: status
          })
          .then(response => {
            localStorage.setItem("usertoken", response.data);
            console.log('success !')
          })
          .catch(errors => {
            console.log(errors);
          });
        }
    }
}