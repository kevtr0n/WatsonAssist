const express = require('express');
const serveStatic = require('serve-static');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * 
 */
app.post('/analyze', (req, res) => {

  if (!req.body) { 
    return res.sendStatus(400); 
  }
  
  var message = req.body.message
  var tone_analyzer = new ToneAnalyzerV3({
    'iam_apikey': 'Ggjp3Y1eJPuO1PlZVdc-Nt_hfHoW-k23a_WsWn9_6xSn',
    'url': 'https://gateway.watsonplatform.net/tone-analyzer/api',
    'version': '2017-09-21'
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