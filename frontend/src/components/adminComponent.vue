<template>
<div>
 <v-dialog v-model="dialog" max-width="500px"  >
    <v-card>
        <v-card-title>
        <span class="headline">{{ editUser }}</span>
        </v-card-title>
        <v-card-text>
        <v-container grid-list-md>
            <v-layout wrap>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.salary" label="Salary"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.position" label="Position"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.tasks" label="Tasks"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.deadline" label="Deadline"></v-text-field>
            </v-flex>
             <v-flex xs12 sm6 md4>
                <v-text-field :type="'password'" v-model="editedItem.password" label="Password"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
            </v-flex>
            </v-layout>
        </v-container>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="save" v-on:click="submitEdit()">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
     <v-dialog v-model="dialog2" max-width="500px"  >
    <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
    <v-card>
        <v-card-title>
        <span class="headline">{{ createUser }}</span>
        </v-card-title>
        <v-card-text>
        <v-container grid-list-md>
            <v-layout wrap>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.name" label="Name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.surname" label="Surname"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.age" label="Age"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.salary" label="Salary"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.email" label="Email"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.position" label="Position"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.tasks" label="Tasks"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.deadline" label="Deadline"></v-text-field>
            </v-flex>
             <v-flex xs12 sm6 md4>
                <v-text-field :type="'password'" v-model="createdItem.password" label="Password"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-text-field v-model="createdItem.status" label="Status"></v-text-field>
            </v-flex>
            </v-layout>
        </v-container>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat  v-on:click="closeDialog()">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="save" v-on:click="submitCreate()">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="Admin" hide-actions class="elevation-1" >
    <template slot="items" slot-scope="props" >
        <td >{{ props.item.id }}</td>
        <td >{{ props.item.name }}</td>
        <td >{{ props.item.surname }}</td>
        <td >{{ props.item.age }}</td>
        <td >{{ props.item.salary }}</td>
        <td >{{ props.item.email }}</td>
        <td >{{ props.item.position }}</td>
        <td >{{ props.item.tasks }}</td>
        <td >{{ props.item.deadline }}</td>
        <td >{{ props.item.password }}</td>
        <td >{{ props.item.status }}</td>
        <td class="justify-center layout px-0">
        <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
        </v-btn>
        </td>
    </template>
    </v-data-table>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import Editer from '../api/editApi';
import Deleter from '../api/deleteApi';
import Creator from '../api/createApi';
import deleteApi from '../api/deleteApi';

const API_URL = "http://localhost:8080";
const EDIT_URL = API_URL + "/edit/";
const DELETE_URL = API_URL + "/delete/";
const CREATE_URL = API_URL + '/create'

export default {
    name: 'adminComponent',
    mounted() {
      //const axios = require('axios')

      var url = "http://localhost:8080/users";
    axios
      .get(url)
      .then(response => {
        
        this.Admin = response.data;
      })
      .catch(function(error: any) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      })
    },

    posted(){
        axios
      .post('http://localhost:8080/register')
      .then(response => {
        this.posted = response.data;
      })
      .catch(function(error) {
        this.poster = error
      })
    },

    data: () => ({
      dialog: false,
      dialog2: false,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name ', value: 'name' },
        { text: 'Surname ', value: 'surname' },
        { text: 'Age ', value: 'age' },
        { text: 'Salary', value: 'salary' },
        { text: 'Email', value: 'email'},
        { text: 'Position', value: 'position'},
        { text: 'Tasks', value: 'tasks'},
        { text: 'Deadline', value: 'deadline'},
        { text: 'Password', value: 'password'},
        { text: 'Status', value: 'status', sortable: false},
      ],
      Admin: [],
      componentKey: 0,
      editedIndex: -1,
      editedItem: {
        id: null,
        name: null,
        surname: null,
        age: null,
        salary: null,
        email: null,
        position: null,
        tasks: null,
        deadline: null,
        password: null,
        status: null,
      },
      createdItem: {
        id: null,
        name: null,
        surname: null,
        age: null,
        salary: null,
        email: null,
        position: null,
        tasks: null,
        deadline: null,
        password: null,
        status: null,
      },
      defaultItem: {
        id: '',
        name: '',
        surname: '',
        age: '',
        salary: '',
        email: '',
        position: '',
        tasks: '',
        deadline: '',
        password: '',
        status: '',
      },
    }),

    computed: {
      createUser () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        return 'New Item'
      },
      editUser() {
        return 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      submitEdit(){
        Editer.editAPI(
          this.editedItem.id,
          this.editedItem.name,
          this.editedItem.surname,
          this.editedItem.age,
          this.editedItem.salary,
          this.editedItem.email,
          this.editedItem.position,
          this.editedItem.tasks,
          this.editedItem.password,
          this.editedItem.deadline,
          this.editedItem.status)

          window.location.reload()

          },
      
      submitCreate(){
        //const axios = require('axios')
        Creator.createAPI(
          this.createdItem.id,
          this.createdItem.name,
          this.createdItem.surname,
          this.createdItem.age,
          this.createdItem.salary,
          this.createdItem.email,
          this.createdItem.position,
          this.createdItem.tasks,
          this.createdItem.password,
          this.createdItem.deadline,
          this.createdItem.status),
          
          this.closeDialog()

          window.location.reload()
      },

      closeDialog() {
        this.dialog2 = false;
      },
      
      initialize () {
        this.Admin = [
          {
        id: '',
        name: '',
        surname: '',
        age: '',
        salary: '',
        email: '',
        position: '',
        tasks: '',
        deadline: '',
        password: '',
        status: '',
          },
        ]
        
      },


      editItem (item: any) {
        this.editedIndex = this.Admin.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },


      deleteItem (item: any) {
        //const axios = require('axios')

        const index = this.Admin.indexOf(item)
        console.log(item.id)
        confirm('Are you sure you want to delete this item?') && this.Admin.splice(index, 1)

        deleteApi.deleteAPI(item.id)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.Admin[this.editedIndex], this.editedItem)
        } else {
          this.Admin.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>