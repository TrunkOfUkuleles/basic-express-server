'use strict'

const validator = require('../src/middleware/validator');
const supertest = require('supertest');
const mockRequest = supertest(validator)

return mockRequest.get('/person').then(data => {
    expect(data.status).toBe(500);

})