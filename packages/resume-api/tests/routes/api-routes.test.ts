import request from 'supertest';
import express from 'express';
import apiRouter from '../../src/routes/api-routes';
import { abakerResume } from '../../src/models/resume';
import { downloads } from '../../src/models/downloads';

const app = express();
app.use('/api/v1/', apiRouter);

describe('API Router', () => {
    
    it('should respond to /api/v1/resume', async () => {
        const res = await request(app).get('/api/v1/resume');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(abakerResume)
    });

    it('should respond to /api/v1/resume/downloads', async () => {
        const res = await request(app).get('/api/v1/resume/downloads');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(downloads)
    });

   it('should respond to /api/v1/status', async () => {
    const res = await request(app).get('/api/v1/status');
    expect(res.status).toBe(200);
  });
});