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
  })
  .put('/:id', (req, res) => {
    const id = req.params.id;
    const {
      name,
      type,
      price
    } = req.body;
    const instrument = {
      name,
      type,
      price
    };
    instruments[id] = instrument;
    res.send(instruments[id]);
  })
  .delete('/:id', (req, res) => {
    const id = req.params.id;
    const deleted = instruments.splice(id, 1);
    res.send(deleted);
  });

