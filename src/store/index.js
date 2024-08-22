import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: {},
  },
  getters: {},
  mutations: {
    setRooms(state, value) {
      state.rooms = value;
    },
  },
  actions: {},
  modules: {},
});
