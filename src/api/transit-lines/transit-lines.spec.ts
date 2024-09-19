import { app } from 'src/app'
import { agent } from 'supertest'

describe('Get line controller', () => {
  test('get a valid line', async () => {
    const response = await agent(app).get('/transit-lines/u9')

    expect(response.status).toBe(200)
    expect(response.body.id).toBe('u9')
    expect(response.body.stops.length).toBe(19)
  })

  test('get an error if line does not exist', async () => {
    const response = await agent(app).get('/transit-lines/u8')

    expect(response.status).toBe(400)
    expect(response.body.error).toBe('Not found')
  })
})
