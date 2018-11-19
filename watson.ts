'use strict';

require("dotenv").config();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3({
  iam_apikey: "14Q2V1O4yXt_eeG_fG3PZwXJp9v38kjGMi4LHBe4JFA3",
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