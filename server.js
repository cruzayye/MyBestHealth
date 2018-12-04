'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const strings = require('./constring');
const client = new pg.Client(strings.conString);

client.connect();
client.on('error', function(err) {
  console.error(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

app.get('/', (request, response) =>  response.sendFile('signup.html', {root: './public'}));

app.get('/new', (request, response) =>  response.sendFile('signup.html', {root: './public'}));

app.post('/users', function(request, response){
  client.query(`
    INSERT INTO users(name, age, heightFeet, heightInches, weight, email, password)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING user_id;
    `,
    [request.body.name, request.body.age, request.body.heightFeet, request.body.heightInches, request.body.weight, request.body.email, request.body.password]
  )
  .then(function(result) {
    response.send(result.rows);
  })
  .catch(function(err){
    console.error(err);
  });
});

app.post('/goals', function(request, response){
  client.query(`
    INSERT INTO goals(what, howOften, dateStart, user_id)
    VALUES ($1, $2, $3, $4);
    `,
    [request.what, request.howOften, request.dateStart, request.user_id]
  )
  .catch(function(err){
    console.error(err);
  });
});


loadDB();

app.listen(PORT, function() {
  console.log(`listening on port number ${PORT}`);
});

//** Database Loaders **//
function loadUsers(){
  client.query('SELECT COUNT(*) FROM users')
  .then(result => {
    if(!parseInt(result.rows[0].count)){
      fs.readFile('./public/data/users.json', (err, fd) =>{
        JSON.parse(fd.toString()).forEach(ele => {
          client.query(
            `INSERT INTO users(name, age, heightFeet, heightInches, weight, email, password)
            VALUES ($1, $2, $3, $4, $5, $6, $7);
            `,
            [ele.name, ele.age, ele.heightFeet, ele.heightInches, ele.weight, ele.email, ele.password]
          )
        })
      })
    }
  })
}

function loadGoals(){
  client.query('SELECT COUNT(*) FROM goals')
  .then(result => {
    if(!parseInt(result.rows[0].count)){
      fs.readFile('./public/data/goals.json', (err, fd) => {
        JSON.parse(fd.toString()).forEach(ele => {
          client.query(
            `INSERT INTO goals(what, howOften, dateStart, user_id)
            VALUES ($1, $2, $3, $4);
            `,
            [ele.what, ele.howOften, ele.dateStart, ele.user_id]
          )
          .catch(console.error);
        })
      })
    }
  })
}

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      user_id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      age VARCHAR(255) NOT NULL,
      heightFeet VARCHAR(255) NOT NULL,
      heightInches VARCHAR(255) NOT NULL,
      weight VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );`
  )
  .then(function(){
    loadUsers();
  })
  .catch(function(err){
    console.error(err)
  })
  client.query(`
    CREATE TABLE IF NOT EXISTS
    goals (
      goal_id SERIAL PRIMARY KEY,
      type VARCHAR(255),
      what VARCHAR(255),
      howOften VARCHAR(255),
      dateStart VARCHAR(255),
      dateEnd VARCHAR(255),
      user_id VARCHAR(255)
    );`
  )
  .then(function(){
    loadGoals();
  })
  .catch(function(err){
    console.error(err)
  })
}
