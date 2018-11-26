<template>
  <div id="div--container">
    <div id="div--mainbox">
      
      <div class="card" width=70% id="div--analysis-form">
        <div id="div--label">
          <p>Enter Text To Be Analyzed</p>
        </div>
        <div id="div--textarea">
          <textarea class="input box" v-model="message" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' placeholder="Happiness is the key towards leading a happy life. Happiness has no common definition and meaning that is accepted by all."/>
        </div>
        <div id="div--button">
          <button class="button-effect" @click="analyze(message)"><span>Submit</span></button>
        </div>
      </div>

      <div class="card" id="div--results-form">
        <div id="div--label">
          <p>Watson Results</p>
        </div>

        
        <div id="div--table">
          <table>
            <tr>
              <th class="tone">Tone</th>
              <th class="definition">Definition</th>
              <th class="example">Example</th>
              <th class="present">Present</th>
              <th class="score">Score</th>
            </tr>
            <tr class="row">
              <td class="tone">Analytical</td>
              <td class="definition">{{ analytical_definition }}</td>
              <td class="example shimmer">{{ analytical_example }}</td>
              <td>
                <div>
                  <img v-if="getIsAnalytical" src="../assets/ok.png">
                  <img v-else src="../assets/cancel.png">
                </div>
              </td>
              <td>{{ getAnalytical }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Anger</td>
              <td class="definition">{{ anger_definition }}</td>
              <td class="example shimmer">{{ anger_example }}</td>
              <td>
                <img v-if="getIsAnger" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getAnger }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Confident</td>
              <td class="definition">{{ confident_definition }}</td>
              <td class="example shimmer">{{ confident_example }}</td>
              <td>
                <img v-if="getIsConfident" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getConfident }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Fear</td>
              <td class="definition">{{ fear_definition }}</td>
              <td class="example shimmer">{{ fear_example }}</td>
              <td>
                <img v-if="getIsFear" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getFear }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Joy</td>
              <td class="definition">{{ joy_definition }}</td>
              <td class="example shimmer">{{ joy_example }}</td>
              <td>
                <img v-if="getIsJoy" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getJoy }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Sadness</td>
              <td class="definition">{{ sadness_definition }}</td>
              <td class="example shimmer">{{ sadness_example }}</td>
              <td>
                <img v-if="getIsSadness" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getSadness }}</td>
            </tr>
            <tr class="row">
              <td class="tone">Tentative</td>
              <td class="definition">{{ tentative_definition }}</td>
              <td class="example shimmer">{{ tentative_example }}</td>
              <td >
                <img v-if="getIsTentative" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getTentative }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

export default {

  name: 'WatsonAssist',

  methods: {

    ...mapActions([
      'setMessage',
    ]),

    ...mapMutations([
      'setMessage'
    ]),

    analyze(message) {
      this.$store.dispatch('setMessage', message);
      this.$store.dispatch('analyze', message);
    }
  },

  computed: {
    ...mapGetters([
      'getIsAnalytical',
      'getIsConfident',
      'getIsTentative',
      'getIsSadness',
      'getIsAnger',
      'getIsFear',
      'getIsJoy',
      'getAnalytical',
      'getConfident',
      'getTentative',
      'getSadness',
      'getAnger',
      'getFear',
      'getJoy',
      'getMessage',
      'getResult'
    ])
  },
  data() {
    return {
      ibm_watson_logo_simple: "https://www.betterbuys.com/wp-content/uploads/2016/02/Watson-Analytics.png",
      ibm_watson_logo:        "https://banner2.kisspng.com/20180526/ljo/kisspng-ibm-watson-iot-tower-ibm-watson-iot-tower-analytic-5b09398685b890.5013696415273312065477.jpg",
      message:                "",

      analytical_definition:  "Relating to or using analysis or logical reasoning.",
      analytical_example:     "Analytical methods; a suave, analytical type who missed his calling as a lawyer.",

      anger_definition:       "A strong feeling of annoyance, displeasure, or hostility.",
      anger_example:          "The colonel's anger at his daughter's disobedience.",

      confident_definition:   "Feeling or showing confidence in oneself; self-assured.",
      confident_example:      "We require outgoing, confident people able to approach large groups; a confident smile.",

      fear_definition:        "An unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat.",
      fear_example:           "He is prey to irrational fears; drivers are threatening to quit their jobs in fear after a cabby's murder; fear of increasing unemployment.",

      joy_definition:         "A feeling of great pleasure and happiness.",
      joy_example:            "Tears of joy; the joy of being alive.",

      sadness_definition:     "The condition or quality of being sad.",
      sadness_example:        "A source of great sadness; it is one of life's sadnesses.",

      tentative_definition:   "Not certain or fixed; provisional; done without confidence; hesitant.",
      tentative_example:      "A tentative conclusion; he eventually tried a few tentative steps round his hospital room"
    }
  },
}
</script>

<style lang="scss" scoped>
// @import url("../../node_modules/carbon-components/css/carbon-components.min.css");
@import url("../style/style.scss");

#div--mainbox{
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  // padding: 10px;
}

#div--analysis-form {
  justify-content: space-between;
  flex-direction: column;
  display: flex;

  #div--label {

    p {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13pt;
      padding-bottom: 10px;
    }
  }  

  #div--textarea {
    padding-bottom: 15px;
    .box {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      border: 1px solid #42b983;
      box-shadow: 0 1px 2px rgb(204, 201, 201);
      transition: all 0.3s ease-in-out;
      font-size: 11pt;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      min-height: 200px;
    }

    .box:hover {
      -webkit-transform: scale(1.005,1.005);
      transform: scale(1.005, 1.005);
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
      -webkit-transform: scale(1.005,1.005);
      transform: scale(1.005, 1.005);
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
      transition: all 0.3s ease-in-out;

      span {
        display: inline-block;
        position: relative;
        transition: all 0.3s ease-in-out;
      }

      span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: all 0.3s ease-in-out;
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
    transform: scale(1.005, 1.005);
    transition: all 0.3s ease-in-out;
  }
}

#div--results-form {
  margin-bottom: 40px;
  #div--label {

    p {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13pt;
      padding-bottom: 10px;
    }
  }

  #div--table {

    table {
      border: 1px solid #42b983;
      box-shadow: 0 1px 2px rgb(204, 201, 201);
      transition: all 0.3s ease-in-out;
      border-collapse: collapse;
      font-size: 11pt;
      width: 100%;

      .row:hover {
        background-color: #2c3e50;
        color: #fff;
        transition: all 0.2s ease-in-out;
        border-left: 20px solid #42b983;
        padding: 15px;
        right: 30px;
      }

      th, td {
        padding: 10px;
        vertical-align: middle;
      }

      th {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 120%;
        font-weight: bold;
        background-color: #2c3e50;
        color: #fff;
        border: 1px solid #2c3e50;
      }
      
      img {
        height: 25px;
      }
      
    }

    table:hover {
      box-shadow: 0 0 15px #719ECE;
    }

    .tone {
      text-align: left;
      width: 10%;
    }

    .definition {
      text-align: left;
      width: 35%;
    }

    .example {
      text-align: left;
      width: 35%;
    }

    .present {
      width: 10%;
    }

    .score {
      width: 10%;
    }

    .shimmer {
      text-align: left;
      font-style: italic;
      color: #719ECE;
    }
  }
}

</style>
