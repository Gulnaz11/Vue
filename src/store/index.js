import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';
import data from './SetObjToAddPaymentForm';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: '',
    CountPaymentOnOnePage: 3,
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
      console.log(paymentsList);
    },
    ADD_PAYMENT_DATA(state, payment) {
      // eslint-disable-next-line radix,no-param-reassign
      const amountOfPages = Object.keys(state.paymentsList).length;
      let amountOfElements = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= amountOfPages; i++) {
        amountOfElements += Object.keys(state.paymentsList[i]).length;
      }
      console.log(amountOfElements);
      if (state.paymentsList[`${amountOfPages}`].length === state.CountPaymentOnOnePage) {
        // eslint-disable-next-line no-unused-expressions
        state.paymentsList[`${amountOfPages + 1}`] = [
          {
            id: amountOfElements + 1,
            date: payment.date,
            category: payment.category,
            value: payment.value,
          },
        ];
      } else {
        state.paymentsList[`${amountOfPages}`].push(
          {
            id: amountOfElements + 1,
            date: payment.date,
            category: payment.category,
            value: payment.value,
          },
        );
      }
      // console.log(state.paymentsList);
      // state.paymentsList.push(payment);
    },
    UPDATE_PAYMENT_DATA(state, payment) {
      console.log(payment);
      const numberOfPage = Math.ceil(payment.id / state.CountPaymentOnOnePage);
      const numberOfElemenOnPage = payment.id - numberOfPage;
      console.log(numberOfPage);
      console.log(numberOfElemenOnPage);
      state.paymentsList[numberOfPage][numberOfElemenOnPage].value = payment.value;
      state.paymentsList[numberOfPage][numberOfElemenOnPage].data = payment.data;
      state.paymentsList[numberOfPage][numberOfElemenOnPage].category = payment.category;
    },
    // eslint-disable-next-line no-shadow,no-unused-vars
    DELETE_PAYMENT_DATA(state, payment) {
      const numberOfPage = Math.ceil(payment.id / state.CountPaymentOnOnePage);
      state.paymentsList[numberOfPage].splice(
        (payment.id - 1) - ((numberOfPage - 1) * state.CountPaymentOnOnePage), 1,
      );
      const amountOfPages = Object.keys(state.paymentsList).length;
      // eslint-disable-next-line no-restricted-syntax,no-plusplus
      for (let i = numberOfPage; i <= amountOfPages; i++) {
        // eslint-disable-next-line no-restricted-syntax
        for (const item of state.paymentsList[i]) {
          // eslint-disable-next-line no-plusplus
          if (item.id > payment.id) item.id--;
        }
      }
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
  },
  actions: {
    fetchData({ commit }) {
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
            category: 'Food',
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
            category: 'Food',
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
    },
  },
  modules: {
    category,
    data,
  },
});
