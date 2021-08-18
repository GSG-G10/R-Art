require('env2')('./config.env');
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const router = require('./controllers/index');

const app = express();
app.set('port', process.env.PORT || 7070);
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
module.exports = app;
