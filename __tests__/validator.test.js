'use strict'

const {server} = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe ("validator test" , () => {
    
    it('should send 500 if no name submitted', async () => {
    return mockRequest.get('/person?notName=notFred').then(data => {
    expect(data.status).toBe(500);})
    })
    
    it('should send 200 if name is there', async () => {
        return mockRequest.get('/person?name=Fred').then(data => {
        expect(data.status).toBe(200);
        })
    })

})