const express = require('express');
const { parse } = require('querystring');
const path = require('path');
const serveStatic = require('serve-static');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json())

app.get('/api/', (req, res) => {
  res.json(["Hello World!"]);
})

app.post('/analyze', (request, response) => {

  if (!request.body) { return response.sendStatus(400); }
  var message = request.body.message
  // console.log(message)

  var tone_analyzer = new ToneAnalyzerV3({
    'version': '2017-09-21',
    'iam_apikey': 'Ggjp3Y1eJPuO1PlZVdc-Nt_hfHoW-k23a_WsWn9_6xSn',
    'url': 'https://gateway.watsonplatform.net/tone-analyzer/api'
  });

  var toneParams = {
    tone_input: { 'text': message },
    content_type: 'application/json'
  };

  tone_analyzer.tone(toneParams, function (error, toneAnalysis) {
    if (error) {
      console.log(error);
    } else { 
      response.send(toneAnalysis)
    }
  });
})

app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Visit your page at http://localhost:' + port);
});