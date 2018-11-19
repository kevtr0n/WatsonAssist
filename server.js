const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');

let app = express();
app.all('/*', function(res, req, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
})
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Visit your page at http://localhost:' + port);
});