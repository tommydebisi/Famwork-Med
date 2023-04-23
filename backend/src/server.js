require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes/index');
const startConnection = require('./utils/connector');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// set routes
app.use('/api/v1', route);

startConnection(app, process.env.PORT);
module.exports = app;
