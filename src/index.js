require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const employeeRoute = require('./route/employeeRoute');

app.use(bodyParser.json());

// Define app routes;

app.use('/employee', employeeRoute);

app.listen(3302, () => {
  console.log('App is listiening at 3302');
})