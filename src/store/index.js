import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_DATA(state, payment) {
      // eslint-disable-next-line radix,no-param-reassign
      payment.page = parseInt(state.paymentsList.length / 4 + 1);
      state.paymentsList.push(payment);
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListTotalAmount:
      ({ paymentsList }) => paymentsList.reduce((total, { value }) => total + value, 0),
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsList = [
          {
            date: '17.01.2022',
            category: 'Food',
            value: 300,
            page: 1,
          },
          {
            date: '18.01.2022',
            category: 'Food',
            value: 500,
            page: 1,
          },
          {
            date: '18.01.2022',
            category: 'Transport',
            value: 200,
            page: 1,
          },
        ];

        commit('SET_PAYMENTS_LIST', paymentsList);
      }, 1000);
    },

  },
  modules: {
    category,
  },
});
