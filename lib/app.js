const express = require('express');
const app = express();
const instrumentsRouter = require('./instrument-router');

app.use(express.json());
app.use('/api/v1/instruments', instrumentsRouter);

module.exports = app;
