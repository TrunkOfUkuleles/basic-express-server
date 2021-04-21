'use strict'

const validator = require('../src/middleware/validator.js');
const supertest = require('supertest');
const mockRequest = supertest(validator);

describe ("validator test" , () => {
    
    it('should send 500 if no name submitted', async () => {
    mockRequest.get('/person?notName=notFred').then(data => {
    expect(data.status).toBe(500);})
    })
    
    it('should send 200 if name is there', async () => {
        mockRequest.get('/person?name=Fred').then(data => {
        expect(data.status).toBe(200);
        })
    })

})