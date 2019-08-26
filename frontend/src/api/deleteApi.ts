import axios from "axios"

export default {
    
    deleteAPI: (id: null) => {

    const API_URL = "http://localhost:8080";
    const DELETE_URL = API_URL + "/delete/";

        axios
        .delete(DELETE_URL + id)
        .then(response => {
          //localStorage.setItem('usertoken', response.data.token)
          //this.receivedCredentials = response.data.dataValues;
          //this.$store.commit('SET_USER', this.receivedCredentials)
          console.log("Deleted !")
        })
        .catch(errors => {
          console.log("Failed to delete !");
          console.log(errors)
        });
    }
}