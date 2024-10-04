const request = require('supertest');
const app = require('../app'); // Adjust the path if necessary

describe('GET /', () => {
    it('should respond with Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});
