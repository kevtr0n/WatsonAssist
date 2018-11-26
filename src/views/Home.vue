<template>
  <div id="div--container">

    <div id="div--mainbox">

      <div class="tile">
        <div class="row">
          <div class="column">
            <img src="../assets/watson.png" alt="">
          </div>
          <div class="column app-goals">
            <h2>Application Goal</h2>
            <p class="goals">{{ app_goals }}</p>
            <br/>
            <p class="disclaimer">{{ disclaimer }}</p>
          </div>
          <div class="column useful-links">
            <h2>Useful Links</h2>
            <ul>
              <li><a target="_blank" :href="api_reference">Watson Tone Analyzer API Reference</a></li>
              <li><a target="_blank" :href="ibm_examples">View Watson Examples on GitHub</a></li>
              <li><a target="_blank" :href="documentation">Watson Tone Analyzer Docs</a></li>
              <li><a target="_blank" :href="my_github">View this App on GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="quote-card">
        <table>
          <tr>
            <td>
              <p class="quote">{{ rometty_quote }}</p>
              <br>
              <p class="tag">{{ rometty_tag }}</p>
            </td>
            <td><img src="../assets/rometty.png" alt=""></td>
          </tr>
        </table>
      </div>

      <div class="quote-card">
        <table>
          <tr>
            <td>
              <p class="quote">{{ lee_quote }}</p>
              <br>
              <p class="tag">{{ lee_tag }}</p>
            </td>
            <td><img src="../assets/lee.png" alt=""></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      // Information:
      app_goals:        "Watson Assist is a state of the art web application uses Watson's linquistics analysis " +
                        "to detect fear, anger, joy, sadness, analytical, confident, and tentative tones that " +
                        "may be found in text. This service can be useful for writing a sales pitch or emails " +
                        "that convey a desired tone.",
      disclaimer:       "*This tool is meant for demonstrative purposes only. Please do not enter in sensative " +
                        "or private information.",
    
      // Quotes:
      rometty_quote:    "\"Artificial intelligence is one of 50 things that Watson does. There is also " +
                        "machine learning, text-to-speech, speech-to-text, and different analytical engines " +
                        "- they're like little Lego bricks. You can put intelligence in any product or any " + 
                        "process you have.\"",
      rometty_tag:      "― Ginni Rometty, CEO of IBM",

      lee_quote:        "\"In deep learning, there’s no data like more data. The more examples of a given " + 
                        "phenomenon a network is exposed to, the more accurately it can pick out patterns " +
                        "and identify things in the real world.\"",
      lee_tag:          "― Kai-Fu Lee, AI Superpowers: China, Silicon Valley, and the New World Order",

      // Links:
      api_reference:    "https://console.bluemix.net/apidocs/tone-analyzer",
      documentation:    "https://console.bluemix.net/docs/services/tone-analyzer/index.html#about",
      ibm_examples:     "https://github.com/watson-developer-cloud",
      my_github:        "https://github.com/kevtr0n/WatsonAssist"
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../node_modules/carbon-components/css/carbon-components.min.css");
@import url("../style/style.scss");

.tile {
  width: 100%;
  background-color: #fff;
  min-height: 250px;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.3);
  margin: 40px 0 40px 0px;
  padding: 0;

  .row {
    margin: 0 50px 0 50px; 
  }

  .column {
    float: left;
    width: 33.33%;
    padding: 20px;
    height: 325px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  img {
    height: 95%;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .app-goals {
    display: inline;
    text-align: left;
    overflow: auto;

    .goals {
      margin-bottom: 20px;
    }
    
    .disclaimer {
      font-style: italic;
      color: gray;
      font-size: 90%;
      margin-bottom: 10px; 
    }
  }

  .useful-links {
    margin-top: 5px;
    overflow: auto;

    ul {

      li {
        margin-bottom: 25px;
        
        a {
          color: #f04be2;
          padding: 6px 3px 6px 3px;
        }

        a:link,
        a:visited {
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.5s;
        }

        a:hover,
        a:active {
          border-bottom: 1px solid #f04be2;
        }
      }
    }
  }
}

.quote-card {
  width: 40%;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  border-radius: 3px;
  margin: 10px;
  justify-content: left;
}

.quote-card:hover {
  box-shadow: 0 8px 16px 1px rgba(0, 0, 0, 0.3);
  -webkit-transform: scale(1.015,1.015);
  transform: scale(1.015, 1.015);
}

td {
  height: 300px;
  vertical-align: top;
  
  .quote {
    padding: 15px;
    font-style: italic;
    min-height: 70%;
    max-height: 70%;
    overflow: auto;
  }

  .tag {
    vertical-align: bottom;
    margin-top: 10px; 
    font-weight: bold;
    font-size: 80%;
    padding: 5px;
    min-height: 50px;
    max-height: 50px;
    overflow: auto;
  }

  img {
    height: 300px;
  }
}

</style>
