const request = require('supertest');
const app = require('../app');
const UserTableTest = require('../test/UserTest');
const { deleteUser } = require('../lib/deleteDataTest');



afterAll(async () => {
  deleteUser()
})

let token = ""

describe('when POST /users/register', () => {
  it('should response 201 and persisted customer user', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      username: 'johndoe',
      password: '123456',
    };

    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })

  it('should response 400 and error Username must be Unique', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      username: 'johndoe',
      password: '123456',
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error Email cant be null', async () => {
    const requestPayload = {
      email: null,
      username: 'johndoe',
      password: '123456',
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error Email cant be Empty', async () => {
    const requestPayload = {
      email: '',
      username: 'johndoe',
      password: '123456',
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error Email must be Unique', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      username: 'johndoe2',
      password: '123456',
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error password cant be null', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      password: ' ',
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error password cant be Empty', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      password: null,
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
  it('should response 400 and error Password minimum 5 characters', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      password: `1234`,
    };
    const response = await request(app)
      .post('/users/register')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
})

describe('when POST /users/login', () => {
  it('should response 201 and persisted customer user', async () => {
    const requestPayload = {
      email: 'dadang@gmail.com',
      password: `123456`,
    };
    const response = await request(app)
      .post('/users/login')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
    token = response.body.access_token
  })

  it('should response 401 and error Email Invalid', async () => {
    const requestPayload = {
      email: 'dadang2@gmail.com',
      password: `123456`,
    };
    const response = await request(app)
      .post('/users/login')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(401);
    expect(body.message).toBeDefined();
  })

  it('should response 401 and error Email is requred', async () => {
    const requestPayload = {
      email: null,
      password: `123456`,
    };
    const response = await request(app)
      .post('/users/login')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(401);
    expect(body.message).toBeDefined();
  })

  it('should response 401 and error Password Invalid', async () => {
    const requestPayload = {
      email: 'dadang2@gmail.com',
      password: `1234`,
    };
    const response = await request(app)
      .post('/users/login')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(401);
    expect(body.message).toBeDefined();
  })

  it('should response 401 and error Password is required', async () => {
    const requestPayload = {
      email: 'dadang2@gmail.com',
      password: null,
    }

    const response = await request(app)
      .post('/users/login')
      .send(requestPayload)
      .set('Accept', 'application/json');

    const { body } = response
    expect(response.status).toEqual(401);
    expect(body.message).toBeDefined();
  })
})

describe('when GET /users/')
