import Vue from 'vue'
import Vuex from 'vuex'
require('dotenv').config();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
Vue.use(Vuex)

export const store = new Vuex.Store({

  /**
   * 
   */
  state: {
    isAnalytical:     false,
    isConfident:      false,
    isTentative:      false,
    isSadness:        false,
    isAnger:          false,
    isFear:           false,
    isJoy:            false,
    analytical:       0.0,
    confident:        0.0,
    tentative:        0.0,
    sadness:          0.0,
    anger:            0.0,
    fear:             0.0,
    joy:              0.0,
    message:          "",
    result:           ""
  },

  /**
   * 
   */
  getters: {
    getIsAnalytical:  state => { return state.isAnalytical; },
    getIsConfident:   state => { return state.isConfident; },
    getIsTentative:   state => { return state.isTentative; },
    getIsSadness:     state => { return state.isSadness; },
    getIsAnger:       state => { return state.isAnger; },
    getIsFear:        state => { return state.isFear; },
    getIsJoy:         state => { return state.isJoy; },
    getAnalytical:    state => { return state.analytical; },
    getConfident:     state => { return state.confident; },
    getTentative:     state => { return state.tentative; },
    getSadness:       state => { return state.sadness; },
    getAnger:         state => { return state.anger; },
    getFear:          state => { return state.fear; },
    getJoy:           state => { return state.joy; },
    getMessage:       state => { return state.message; },
    getResult:        state => { return state.result; }
  },

  /**
   * 
   */
  mutations: {
    setIsAnalytical:  (state, payload) => { state.isAnalytical = payload; },
    setIsConfident:   (state, payload) => { state.isConfident = payload; },
    setIsTentative:   (state, payload) => { state.isTentative = payload; },
    setIsSadness:     (state, payload) => { state.isSadness = payload; },
    setIsAnger:       (state, payload) => { state.isAnger = payload; },
    setIsFear:        (state, payload) => { state.isFear = payload; },
    setIsJoy:         (state, payload) => { state.isJoy = payload; },
    setAnalytical:    (state, payload) => { state.analytical = payload; },
    setConfident:     (state, payload) => { state.confident = payload; },
    setTentative:     (state, payload) => { state.tentative = payload; },
    setSadness:       (state, payload) => { state.sadness = payload; },
    setAnger:         (state, payload) => { state.anger = payload; },
    setFear:          (state, payload) => { state.fear = payload; },
    setJoy:           (state, payload) => { state.joy = payload; },
    setMessage:       (state, payload) => { state.message = payload; },
    setResult:        (state, payload) => { state.result = payload; }
  },

  /**
   * 
   */
  actions: {
    setMessage: (context, payload) => { context.commit('setMessage', payload)},
    analyze:    (context) => {
      var url = "http://localhost:5000/analyze";
      var value;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          "message":context.state.message
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(function(response) {
        console.log(response);
      }).then(function(error) {
        console.log(error);
      })/*.then(error => )*/
    }
  }
})