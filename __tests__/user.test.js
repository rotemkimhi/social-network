// tests/user.test.ts
import supertest from 'supertest'
import server from '../src/server' // path to your server file
import jwt from 'jsonwebtoken'

describe('GET /api/auth/user', () => {
  let token;

  beforeEach(() => {
    const userForToken = {
      username: "TestUser",
      id: 1,
      email: "test@test.com"
    }

    token = jwt.sign(userForToken, 'abc')
  });

  it('should return 405 for non GET methods', async () => {
    const res = await supertest(server)
      .post('/api/auth/user')
      .expect(405)
      .expect('Content-Type', /json/)
    expect(res.body.message).toEqual('Method not allowed')
  })

  it('should return 401 for invalid token', async () => {
    const res = await supertest(server)
      .get('/api/auth/user')
      .set('Cookie', [`auth=invalidtoken`])
      .expect(401)
      .expect('Content-Type', /json/)
    expect(res.body.error).toEqual('token invalid')
  })

  it('should return 200 and user data for valid token', async () => {
    const res = await supertest(server)
      .get('/api/auth/user')
      .set('Cookie', [`auth=${token}`])
      .expect(200)
      .expect('Content-Type', /json/)
    // additional checks for user data can be added here
  })
})
