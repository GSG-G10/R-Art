const request = require('supertest');
const app = require('../server/app');

test('test main route /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});
