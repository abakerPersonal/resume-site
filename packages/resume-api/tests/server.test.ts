import request from 'supertest'
import server from '../src/server'

describe('Express Server', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should respond to the root path with 404', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(404);
  });

  it('should respond to should respond to /api/v1/ping with ok', async () => {
    const res = await request(server).get('/api/v1/status');
    // Adjust this based on your actual API router
    expect(res.status).toBe(200)
  });
});