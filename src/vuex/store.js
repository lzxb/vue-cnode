import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '../mutationss/'
import state from '../states/'

Vue.use(Vuex)
const store = new Vuex.Store({ state, mutations })
export default store