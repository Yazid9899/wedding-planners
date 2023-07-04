const request = require('supertest');
const app = require('../app');
const { deleteUser } = require('../lib/deleteDataTest');
const { insertUser } = require('../lib/createDataTest');


beforeAll(async () => {
  insertUser()
})

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
  // it('should response 400 and error Username must be Unique', async () => {
  //   const requestPayload = {
  //     email: 'dadang@gmail.com',
  //     username: 'johndoe',
  //     password: '123456',
  //   };
  //   const response = await request(app)
  //     .post('/users/register')
  //     .send(requestPayload)
  //     .set('Accept', 'application/json');

  //   const { body } = response
  //   expect(response.status).toEqual(400);
  //   expect(body.message).toBeDefined();
  // })
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
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
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

describe('when GET /users/', () => {
  it('should response 200 and Get Selected User', async () => {
    const response = await request(app)
      .get('/users')
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 401 and error User not login ', async () => {
    const response = await request(app)
      .get('/users')

      const { body } = response
      expect(response.status).toEqual(401);
      expect(body.message).toBeDefined();
  })

  it('should response 401 and error Acces Token Invalid ', async () => {
    const response = await request(app)
      .get('/users')
      .set('access_token', `dsaasdshadsajb`);

      const { body } = response
      expect(response.status).toEqual(401);
      expect(body.message).toBeDefined();
  })

  it('should response 404 and error User Not Found', async () => {
    const response = await request(app)
      .get('/users')
      .set('access_token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJlbWFpbCI6ImRhZGFuZ0BnbWFpbC5jb20iLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE2ODgzNjY5ODF9.3PMdWOTAa3b4MQbusyMHT881-E40fZuLJ5A2MfUNLzw`);

      const { body } = response
      expect(response.status).toEqual(404);
      expect(body.message).toBeDefined();
  })
})




