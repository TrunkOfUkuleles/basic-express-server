'use strict';

return mockRequest.get('/no-thing').then(data => {
    expect(data.status).toBe(404);

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
  })


//   it('should respond properly to a GET: /hello', async () => {
//     const response = await mockRequest.get('/hello');
//     expect(response.status).toBe(200); // test for status code
//     expect(response.text).toBe('hello world!'); // test your output
//     // HINT: test for shape/type of data
//   })
})
});