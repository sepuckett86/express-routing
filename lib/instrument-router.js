const { Router } = require('express');

const instruments = [];

module.exports = Router()
  .get('/', (req, res) => {
    res.send(instruments);
  })
  .post('/', (req, res) => {
    const { 
      name,
      type,
      price
    } = req.body;
    instruments.push({
      name,
      type,
      price
    });
    res.send(instruments[instruments.length - 1]);
  })
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const instrument = instruments[id];
    res.send(instrument);
  });
