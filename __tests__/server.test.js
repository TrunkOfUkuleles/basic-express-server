'use strict';

const {server} = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('WEB SERVER:', () => {

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 500 on an error', () => {
    return mockRequest.get('/person?notName=notFred').then(data => {
        expect(data.status).toBe(500);
});
  });

  it('sould get all from DB', async () => {
    return mockRequest.get('/books').then(data => {
      expect(data.status).toBe(200);
    });
  });

  it('sould create a new item in the DB', async () => {
    return mockRequest.get('/books').send({title: "Test1", author: "testMan"}).then(data => {
      expect(data.title).toEqual("Test1")
    });
  });

  it('sould create a new item in the DB', async () => {
    return mockRequest.get('/books').send({title: "Test1", author: "testMan"}).then(data => {
      expect(data.title).toEqual("Test1")
    });
  });


//   it('should respond properly to a GET: /hello', async () => {
//     const response = await mockRequest.get('/hello');
//     expect(response.status).toBe(200); // test for status code
//     expect(response.text).toBe('hello world!'); // test your output
//     // HINT: test for shape/type of data
//   })
});