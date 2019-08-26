import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: {
        email: null,
        name: null,
        surname: null,
        position: null,
        age: null,
        notes: null,
        status: null,
        tasks: null,
        salary: null,
      }
  },
  mutations: {
    SET_USER : (state,user) => {
      state.user = user
    }
  },
  actions: {

  },
  getters: {
    USER : state => {
      return state.user
    }
  }
});
