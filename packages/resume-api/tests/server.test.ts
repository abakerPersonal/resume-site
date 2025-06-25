import request from 'supertest'
import app from '../src/routes'

let server: any

beforeAll(() => {
    server = app.listen(3000)
})

afterAll(() => {
    server.close()
})

describe('GET /', () => {
  it('should return 200 OK and servie inde.html', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.text).toContain('<h1>Hello World</h1>')
  })
})