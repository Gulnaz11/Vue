import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: '',
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
      console.log(paymentsList);
    },
    ADD_PAYMENT_DATA(state, payment) {
      // eslint-disable-next-line radix,no-param-reassign
      const amountOfObj = Object.keys(state.paymentsList).length;
      if (state.paymentsList[`${amountOfObj}`].length === 3) {
        // eslint-disable-next-line no-unused-expressions
        state.paymentsList[`${amountOfObj + 1}`] = [
          {
            id: amountOfObj * 3 + 1,
            date: payment.date,
            category: payment.category,
            value: payment.value,
          },
        ];
      } else {
        state.paymentsList[`${amountOfObj}`].push(
          {
            id: amountOfObj * 3 + state.paymentsList[`${amountOfObj}`].length - 2,
            date: payment.date,
            category: payment.category,
            value: payment.value,
          },
        );
      }
      // state.paymentsList.push(payment);
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsList = {
          1: [
            {
              id: 1,
              date: '20.03.2020',
              category: 'Food',
              value: 169,
            },
            {
              id: 2,
              date: '21.03.2020',
              category: 'Navigation',
              value: 50,
            },
            {
              id: 3,
              date: '22.03.2020',
              category: 'Sport',
              value: 450,
            },
          ],
          2: [
            {
              id: 4,
              date: '23.03.2020',
              category: 'Entertaiment',
              value: 969,
            },
            {
              id: 5,
              date: '24.03.2020',
              category: 'Education',
              value: 1500,
            },
            {
              id: 6,
              date: '25.03.2020',
              category: 'Food',
              value: 200,
            },
          ],
        };

        commit('SET_PAYMENTS_LIST', paymentsList);
      }, 1000);
    },

  },
  modules: {
    category,
  },
});
