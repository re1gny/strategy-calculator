import Vue from 'vue';
import Vuex from 'vuex';
import { SimpleStrategy } from '@/utils/strategy/SimpleStrategy';
import { AverageStrategy } from '@/utils/strategy/AverageStrategy';
import { ArbitrageStrategy } from '@/utils/strategy/ArbitrageStrategy';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strategies: {
      simple: new SimpleStrategy(),
      average: new AverageStrategy(),
      arbitrage: new ArbitrageStrategy(),
    },
  },
  mutations: {
    addStrategy (state, payload) {
      state.strategies[payload.name] = payload[payload.strategy];
    },
  },
});

export default store;