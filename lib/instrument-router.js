const { Router } = require('express');

const instruments = [];

module.exports = Router()
  .get('/', (req, res) => {
    res.send(instruments);
  });
