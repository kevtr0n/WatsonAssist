import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Booleans to check tone state:
    isAnalytical: false,
    isConfident: false,
    isTentative: false,
    isAnger: false,
    isFear: false,
    isJoy: false,
    
    // Tone state percentage values:
    analytical: 0.0,
    confident: 0.0,
    tentative: 0.0,
    anger: 0.0,
    fear: 0.0,
    joy: 0.0
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
