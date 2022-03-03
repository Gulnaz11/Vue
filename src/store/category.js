export default {
  state: {
    categoryList: [],
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    ADD_CATEGORY_LIST(state, categoryList) {
      if (!state.categoryList.includes(categoryList)) state.categoryList.push(categoryList);
    },
  },
  getters: {
    categoryList: ({ categoryList }) => categoryList,
  },
  actions: {
    fetchCategoryList({ commit }) {
      const categoryList = ['Food', 'Transport', 'Education', 'Sport'];
      commit('SET_CATEGORY_LIST', categoryList);
    },
  },
};
