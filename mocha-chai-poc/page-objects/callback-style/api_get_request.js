/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const Path = '/get';

function getAPI(response) {
  api.get(Path)
    .set('Content-Type', 'application/json')
    .end((err, result) => {
      response(result);
    });
}

module.exports = {
  getAPI,
};
