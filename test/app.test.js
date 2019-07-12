const app = require('../lib/app');
const request = require('supertest');

describe('app', () => {
  it('can post an instrument', () => {
    return request(app)
      .post('/api/v1/instruments')
      .send({
        name: 'clarinet',
        type: 'woodwind',
        price: 1000
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'clarinet',
          type: 'woodwind',
          price: 1000
        });
      });
  });

  it('/api/v1/instruments returns an array of instruments', () => {
    return request(app)
      .get('/api/v1/instruments')
      .then(res => {
        expect(res.body).toEqual([
          {
            name: 'clarinet',
            type: 'woodwind',
            price: 1000
          }
        ]);
      });
  });

  it('/api/v1/instrument/:id returns an instrument', () => {
    return request(app)
      .get('/api/v1/instruments/0')
      .then(res => {
        expect(res.body).toEqual(
          {
            name: 'clarinet',
            type: 'woodwind',
            price: 1000
          }
        );
      });
  });

  it('can put to /api/v1/instrument/:id', () => {
    return request(app)
      .put('/api/v1/instruments/0')
      .send({ name: 'oboe', type: 'woodwind', price: 1000 })
      .then(res => {
        expect(res.body).toEqual(
          {
            name: 'oboe',
            type: 'woodwind',
            price: 1000
          }
        );
      });
  });

  it('can delete /api/v1/instrument/:id', () => {
    request(app)
      .delete('/api/v1/instruments/0')
      .then(res => {
        expect(res.body).toEqual(
          [{
            name: 'oboe',
            type: 'woodwind',
            price: 1000
          }]
        );
        return request(app).get('/api/v1/instruments')
          .then(res => {
            expect(res.body).toEqual([]);
          });
      });
  });
});

