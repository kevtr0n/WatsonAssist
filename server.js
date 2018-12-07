const express = require('express');
const serveStatic = require('serve-static');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').load();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Sends a HTTP POST request to IBM Watson's
 * Tone Analyzer Cloud service.
 */
app.post('/analyze', (req, res) => {

  if (!req.body) { 
    return res.sendStatus(400); 
  }
  
  var message = req.body.message
  var tone_analyzer = new ToneAnalyzerV3({
    'iam_apikey': process.env.TONE_ANALYZER_API_KEY,
    'url': process.env.TONE_ANALYZER_API_URL,
    'version': process.env.TONE_ANALYZER_VERSION_DATE
  });

  var toneParams = {
    tone_input: { 'text': message },
    content_type: 'application/json'
  };

  const p = new Promise((resolve, reject) => {
    tone_analyzer.tone(toneParams, (error, toneAnalysis) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(toneAnalysis);
      }
    });
  });

  p
    .then(result => res.send(result))
    .catch(error => console.log('Error', error.message));
})

app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Visit your page at http://localhost:${port}`);
});