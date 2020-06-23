import Vue from 'vue'
import Vuex from 'vuex'
import Example from '@/store/modules/example.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Example
  }
})
