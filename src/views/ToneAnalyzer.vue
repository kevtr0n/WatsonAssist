<template>
  <div id="div--container">
    <div id="div--mainbox">
      
      <div class="tile" id="div--analysis-form">
        <div id="div--label">
          <p>Enter Text To Be Analyzed</p>
        </div>

        <div id="div--textarea">
          <textarea class="input box" v-model="message" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' placeholder="Happiness is the key towards leading a happy life. Happiness has no common definition and meaning that is accepted by all."/>
        </div>

        <div v-if="getIsLoading" id="div--loading">
          <div class="hexagon">
            <hexagon></hexagon>
          </div>
        </div>
        <div v-else id="div--button">
          <button class="button-style" @click="analyze(message)"><span>Submit</span></button>
        </div>

      </div>

      <div class="card" id="div--results-form">
        <div id="div--label">
          <p>Document Analysis</p>
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
            <tr class="document row">
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
            <tr class="document row">
              <td class="tone">Anger</td>
              <td class="definition">{{ anger_definition }}</td>
              <td class="example shimmer">{{ anger_example }}</td>
              <td>
                <img v-if="getIsAnger" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getAnger }}</td>
            </tr>
            <tr class="document row">
              <td class="tone">Confident</td>
              <td class="definition">{{ confident_definition }}</td>
              <td class="example shimmer">{{ confident_example }}</td>
              <td>
                <img v-if="getIsConfident" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getConfident }}</td>
            </tr>
            <tr class="document row">
              <td class="tone">Fear</td>
              <td class="definition">{{ fear_definition }}</td>
              <td class="example shimmer">{{ fear_example }}</td>
              <td>
                <img v-if="getIsFear" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getFear }}</td>
            </tr>
            <tr class="document row">
              <td class="tone">Joy</td>
              <td class="definition">{{ joy_definition }}</td>
              <td class="example shimmer">{{ joy_example }}</td>
              <td>
                <img v-if="getIsJoy" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getJoy }}</td>
            </tr>
            <tr class="document row">
              <td class="tone">Sadness</td>
              <td class="definition">{{ sadness_definition }}</td>
              <td class="example shimmer">{{ sadness_example }}</td>
              <td>
                <img v-if="getIsSadness" src="../assets/ok.png">
                <img v-else src="../assets/cancel.png">
              </td>
              <td>{{ getSadness }}</td>
            </tr>
            <tr class="document row">
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
  
      <template v-if="getSeen">
        <div class="card" id="div--results-form">
          <div id="div--label">
            <p>Sentence Analysis</p>
          </div>
          <div id="div--table">
            <table>
              <tr>
                <th class="index">Index</th>
                <th class="text">Text</th>
                <th class="tones">Tones</th>
              </tr>
              <tr class="document row" v-for="sentence in getSentences" :key="sentence">
                <td>{{ sentence.sentence_id }}</td>
                <td class="text shimmer">{{ sentence.text }}</td>
                <td class="tones">
                  <div class="no-tones" v-if="sentence.tones.length == 0">
                    None
                  </div>
                  <div class="tone-row" v-else v-for="tone in sentence.tones" :key="tone">
                    <ul>
                      <li class="tone-name">{{ tone.tone_name }}:</li>
                      <li class="tone-score">{{ tone.score }}</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </template>
    </div>


  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Hexagon } from 'vue-loading-spinner';
export default {

  name: 'WatsonAssist',

  components: {
    Hexagon
  },

  methods: {

    ...mapActions([
      'setMessage',
    ]),

    ...mapMutations([
      'setMessage'
    ]),

    analyze(message) {
      this.$store.dispatch('clear');
      this.$store.dispatch('setMessage', message)
      if (message != "") {
        this.$store.dispatch('analyze');
      } else {
        console.log("Error:\tPlease enter text into the text box.");
      }
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
      'getIsLoading',
      'getAnalytical',
      'getConfident',
      'getTentative',
      'getSadness',
      'getAnger',
      'getFear',
      'getJoy',
      'getMessage',
      'getSentences',
      'getSeen'
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

      tentative_definition:   "A person's degree of inhibition; not certain or fixed; provisional; done without confidence; hesitant.",
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
      margin: 12px;
    }
  }  

  #div--textarea {
    padding-bottom: 15px;
    .box {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      border: 1px solid #42b983;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgb(204, 201, 201);
      transition: all 0.3s ease-in-out;
      font-size: 11pt;
      width: 70%;
      max-width: 70%;
      min-width: 70%;
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

  #div--loading {
    width: 70%;
    align-self: center;
    margin-bottom: 15px;
    transition: all 0.3s ease-in-out;
    position: relative;

    border: 1px solid #42b983;
    box-shadow: 0 0 15px #719ECE;

    div {
      margin: 3px auto 2px auto;
      width: 100%;
      height: 100%;
    }
  }

  #div--button {
    width: 70%;
    align-self: center;
    margin-bottom: 15px;
    border: 1px solid #42b983;
    box-shadow: 0 1px 2px rgb(204, 201, 201);
    transition: all 0.3s ease-in-out;
    border-radius: 3px;

    .button-style {
      border-radius: 2px;
      background-color: #42b983;
      color: #fff;
      border: 1px;
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
      }
    }

    .button-style:hover {
      span {
        padding-right: 20px;
      }
      span:after {
        opacity: 1;
        right: 0; 
      }
    }
  }

  #div--button:hover {
    box-shadow: 0 0 15px #719ECE;
  }
}

#div--results-form {

  margin: 10px;

  #div--label {

    p {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13pt;
      margin: 12px;
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
        border-left: 10px solid #42b983;
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

    ul {
      width: 100%;
      .tone-name {
        width: 45%;
        display: inline-block;
      }
      .tone-score {
        width: 55%;
        display: inline-block;
      }
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

    .index {
      width: 10%;
    }

    .text {
      text-align: left;
      width: 60%;
    }

    .tones {
      text-align: left;
      width: 30%;
    }

    .no-tones {
      font-style: italic;
    }

    .shimmer {
      text-align: left;
      font-style: italic;
      color: #719ECE;
    }
  }
}
</style>