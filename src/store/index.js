import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: {},
    isModalOpen: false,
  },
  getters: {},
  mutations: {
    setRooms(state, value) {
      state.rooms = value;
    },
    setIsModalOpen(state, value) {
      state.isModalOpen = value;
    },
  },
  actions: {},
  modules: {},
});
