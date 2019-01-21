const express = require('express');
const bodyParser = require('body-parser');
const {body, validate} = require('express-validator/check');
const app = express();
const path = require('path');

//const hostname ='127.0.0.1';
const port = 3000;

app.get('/', (req, res) => res.sendFile(resolve(__dirname, '..', '/Users/darrynwu/shipLibrary/public', 'index.html')));

app.listen(port, (err)=>{
  if (err) {
    return console.log('Arcada Server Crash!', err);
  }
  console.log(`Arcada Server Online!  Running local at port: ${port} is in directory: ${__dirname}`);
});
