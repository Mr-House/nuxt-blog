import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from './common'
import brand from './brand'

const store = () => new Vuex.Store({
  modules: {
    common,
    brand,
  }
})
export default store;
