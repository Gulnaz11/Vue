export default {
  state: {
    data: {},
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
  getters: {
    data: ({ data }) => data,
  },

};
