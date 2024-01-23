const request = require('supertest');

const server = 'http://localhost:8080';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */

//check connection to root
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('Responds with 404 status', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(404);
      });
    });

    describe('POST', () => {
      it('Responds with a 201'),
        () => {
          return request(server)
            .get('/')
            .expect('Content-Type', /application\/json/)
            .expect(201);
        };
    });
  });
});
