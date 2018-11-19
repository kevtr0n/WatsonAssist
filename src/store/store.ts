import Vue from 'vue'
import Vuex from 'vuex'
require('dotenv').config();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
Vue.use(Vuex)

function analyzeInput(message) {
  var toneAnalyzer = ToneAnalyzerV3({
    url: process.env.TONE_ANALYZER_API_URL,
    iam_apikey: process.env.TONE_ANALYZER_API_KEY,
    version: process.env.TONE_ANALYZER_VERSION_DATE
  });

  var toneParams = {
    tone_input: { 'text': message },
    content_type: 'application/json'
  };

  toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
    if (error) {
      return error;
    } else {
      return toneAnalysis;
    }
  });
}

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
    message:          "test",
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
    analyze:    (context, payload) => {
      var toneAnalyzer = new ToneAnalyzerV3({
        version: '2017-09-21',
        iam_apikey: 'Ggjp3Y1eJPuO1PlZVdc-Nt_hfHoW-k23a_WsWn9_6xSn',
        url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
      });

      var toneParams = { 
        tone_input: payload,
        content_type: 'application/json'
      };

      toneAnalyzer.tone(toneParams, function(error, toneAnalysis) {
        if (error) {
          context.commit('setMessage', error);
        } else {
          context.commit('setMessage', toneAnalysis);
        }
      })
    }
  }
})