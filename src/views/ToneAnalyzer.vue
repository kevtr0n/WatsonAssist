<template>
  <div id="container">
    <div id="div--mainbox">
      
      <div class="bx--tile card" id="div--analysis-form">
        <div id="div--label">
          <p>Enter Text To Be Analyzed</p>
        </div>
        <div id="div--textarea">
          <textarea class="input box" v-model="message" v-on:click="analyze(message)" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' placeholder="Happiness is the key towards leading a happy life. Happiness has no common definition and meaning that is accepted by all."/>
        </div>
        <div id="div--button">
          <button class="button-effect" v-on:click="analyze(message)"><span>Submit</span></button>
        </div>
      </div>

      <div class="bx--tile card card" id="div--analysis-form">
        <div id="div--label">
          <p>Stuff</p>
        </div>
        <div id="div--results">
          <p>{{ analyzedMessage }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WatsonAssist',
  data() {
    return {
      ibm_watson_logo_simple: 'https://www.betterbuys.com/wp-content/uploads/2016/02/Watson-Analytics.png',
      ibm_watson_logo: 'https://banner2.kisspng.com/20180526/ljo/kisspng-ibm-watson-iot-tower-ibm-watson-iot-tower-analytic-5b09398685b890.5013696415273312065477.jpg',
      toneAnalysis: "Results would go here"
    }
  },
  methods: {
    /**
     * 
     */
    analyze: function(input) {
      require('dotenv').config();
      const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
      const toneAnalyzer = new ToneAnalyzerV3({
        version: process.env.TONE_ANALYZER_VERSION_DATE,
        url: process.env.TONE_ANALYZER_API_URL,
        iam_apikey: process.env.TONE_ANALYZER_API_KEY
      });
      /* Write rest of method */
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
@import url("../../node_modules/carbon-components/css/carbon-components.min.css");

#container {
  align-self: center;
}

#div--mainbox{
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  
  .card {
    width: 55%;
    min-height: 250px;
    margin: 10px;
    background: #fff;
  }

  .results {
    width: 50%;
  }

  .img-png {
    max-width: 100%;
    max-height: 100%;
  }
}

#div--analysis-form {
  justify-content: space-between;
  flex-direction: column;
  display: flex;

  #div--label {
    padding-bottom: 10px;
    p {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 11pt;
    }
  }  

  #div--textarea {
    padding-bottom: 15px;
    .box {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      border: 1px solid #42b983;
      box-shadow: 0 1px 2px rgb(204, 201, 201);
      transition: all 0.3s ease-in-out;
      font-size: 10pt;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      min-height: 200px;
    }

    .box:hover {
      -webkit-transform: scale(1.015,1.015);
      transform: scale(1.015, 1.015);
      outline: none !important;
      border: 1px solid #42b983;
      box-shadow: 0 0 30px #719ECE;
    }

    .box:hover::after {
      opacity: 1;
    }

    .box:focus {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      outline: none !important;
      border: 1px solid #42b983;
      box-shadow: 0 0 30px #719ECE;
      -webkit-transform: scale(1.015,1.015);
      transform: scale(1.015, 1.015);
    }

  }
  
  #div--button {
    justify-content: flex-end;
    display: flex;
    border: 2px #719ECE;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.103);
    transition: all 0.3s ease-in-out;

    .button-effect {
      border-radius: 2px;
      background-color: #42b983;
      border: 1px;
      color: #fff;
      font-weight: 400;
      font-size: 11pt;
      padding: 15px;
      width: 100%;

      span {
        display: inline-block;
        position: relative;
      }

      span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
      }
    }

    .button-effect:hover {
      span {
        padding-right: 25px;
      }
      span:after {
        opacity: 1;
        right: 0;
      }
    }
  }

  #div--button:hover {
    box-shadow: 0 0 15px #719ECE;
    transform: scale(1.015, 1.015);
  }
}

</style>
