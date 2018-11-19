'use strict';

require("dotenv").config();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3({
  iam_apikey: "Ggjp3Y1eJPuO1PlZVdc-Nt_hfHoW-k23a_WsWn9_6xSn",
  version: "2017-09-21",
  url: "https://gateway.watsonplatform.net/tone-analyzer/api"
});

toneAnalyzer.tone(
  {
    tone_input: 'Greetings from the Watson Developer Cloud Node SDK, we are pleased to say hello!',
    content_type: 'text/plain'
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log('tone endpoint:');
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);