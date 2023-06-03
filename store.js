import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    selectedCircles: [],
  },
  mutations: {
    setSelectedCircles(state, circles) {
      state.selectedCircles = circles;
    },
  },
});

const app = createApp({});
app.use(store);
app.mount('#app');

export default store;