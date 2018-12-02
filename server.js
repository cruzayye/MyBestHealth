'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (request, response) =>  response.sendFile('signup.html', {root: './public'}));

app.get('/new', (request, response) =>  response.sendFile('signup.html', {root: './public'}));

app.listen(PORT, function() {
  console.log(`listening on port number ${PORT}`);
});
