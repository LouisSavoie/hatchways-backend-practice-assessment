import req from 'supertest'
import app from '../app.js'

describe('Root', () => {
  test('Responds with status 200', async () => {
    const res = await req(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('Hello world!')
  })
  test('Responds with text', async () => {
    const res = await req(app).get('/')
    expect(res.text).toBe('Hello world!')
  })
})
