import Vue from 'vue'
import Vuex from 'vuex'
require('dotenv').config();

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
    message:          ""
  },

  /**
   * 
   */
  getters: {
    getIsAnalytical:    (state) => { return state.isAnalytical; },
    getIsConfident:     (state) => { return state.isConfident; },
    getIsTentative:     (state) => { return state.isTentative; },
    getIsSadness:       (state) => { return state.isSadness; },
    getIsAnger:         (state) => { return state.isAnger; },
    getIsFear:          (state) => { return state.isFear; },
    getIsJoy:           (state) => { return state.isJoy; },
    getAnalytical:      (state) => { return state.analytical; },
    getConfident:       (state) => { return state.confident; },
    getTentative:       (state) => { return state.tentative; },
    getSadness:         (state) => { return state.sadness; },
    getAnger:           (state) => { return state.anger; },
    getFear:            (state) => { return state.fear; },
    getJoy:             (state) => { return state.joy; },
    getMessage:         (state) => { return state.message; },
  },

  /**
   * 
   */
  mutations: {
    setIsAnalytical:    (state, payload) => { state.isAnalytical = payload; },
    setIsConfident:     (state, payload) => { state.isConfident = payload; },
    setIsTentative:     (state, payload) => { state.isTentative = payload; },
    setIsSadness:       (state, payload) => { state.isSadness = payload; },
    setIsAnger:         (state, payload) => { state.isAnger = payload; },
    setIsFear:          (state, payload) => { state.isFear = payload; },
    setIsJoy:           (state, payload) => { state.isJoy = payload; },
    setAnalytical:      (state, payload) => { state.analytical = payload; },
    setConfident:       (state, payload) => { state.confident = payload; },
    setTentative:       (state, payload) => { state.tentative = payload; },
    setSadness:         (state, payload) => { state.sadness = payload; },
    setAnger:           (state, payload) => { state.anger = payload; },
    setFear:            (state, payload) => { state.fear = payload; },
    setJoy:             (state, payload) => { state.joy = payload; },
    setMessage:         (state, payload) => { state.message = payload; },
  },

  /**
   * 
   */
  actions: {

    /**
     * 
     */
    setMessage: (context, payload) => { 
      console.log(`Action (setMessage):\n\tmessage:\t${payload}`)
      context.commit('setMessage', payload)
    },

    /**
     * 
     */
    clear: ({ commit }) => {
      commit('setIsAnalytical', false);
      commit('setIsAnger', false);
      commit('setIsConfident', false);
      commit('setIsJoy', false);
      commit('setIsFear', false);
      commit('setIsTentative', false);
      commit('setIsSadness', false);

      commit('setAnalytical', 0.0);
      commit('setAnger', 0.0);
      commit('setConfident', 0.0);
      commit('setJoy', 0.0);
      commit('setFear', 0.0);
      commit('setSadness', 0.0);
      commit('setTentative', 0.0);
    },

    /**
     * 
     */
    analyze: (context) => {
      var url = "https://watson-assist.herokuapp.com/analyze";
      var data = { message: context.state.message };

      console.log(`Action:\tanalyze:\nEntrance:\t${JSON.stringify(data)}`);
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      }).then(
        response => response.json(),
        error => console.log(`Action:\tanalyze\nError:\t${error}`)
      ).then(
        res => context.dispatch('updateState', res)
      );
    },

    /**
     * 
     */
    updateState: ({ dispatch }, payload) => {

      if (payload.hasOwnProperty("document_tone")) {
        console.log(`Action:\tupdateState\nTones:\t${payload.document_tone}`)
        dispatch('setDocumentTones', payload.document_tone.tones);
      }
    },

    /**
     * 
     */
    setDocumentTones: ({ dispatch }, payload) => {
      console.log(`Action (setDocumentTones): Entry ${payload}`)
      for (let i = 0; i < payload.length; i++) {
          dispatch('setTone', payload[i]);
      }
    },

    /**
     * 
     */
    setTone: ({ commit }, payload) => {
      console.log(`Action (setTone):\n\t${payload.tone_name}: ${payload.score}`)
      switch(payload.tone_name) {
        case "Analytical": { 
          commit('setIsAnalytical', true); 
          commit('setAnalytical', payload.score);
          break; 
        }
        case "Anger": { 
          commit('setIsAnger', true);
          commit('setAnger', payload.score);
          break;
        }
        case "Confident": {
          commit('setIsConfident', true);
          commit('setConfident', payload.score);
          break;
        }
        case "Fear": {
          commit('setIsFear', true);
          commit('setFear', payload.score);
          break;
        }
        case "Joy": {
          commit('setIsJoy', true);
          commit('setJoy', payload.score);
          break;
        }
        case "Sadness": {
          commit('setIsSadness', true);
          commit('setSadness', payload.score);
          break;
        }
        case "Tentative": {
          commit('setIsTentative', true);
          commit('setTentative', payload.score);
          break;
        }
      }
    }
  }
})
