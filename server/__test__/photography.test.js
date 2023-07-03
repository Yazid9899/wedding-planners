const request = require('supertest');
const app = require('../app');
const { insertPhotography } = require('../lib/createDataTest');
const { deletePhotography } = require('../lib/deleteDataTest');

beforeAll(async () => {
  insertPhotography()
})

afterAll(async () => {
  deletePhotography()
})

describe('when GET /photographies', () => {
  it('should response 200 and Get photographies', async () => {
    const response = await request(app)
      .get('/photographies')

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get photographies with bellowPrice', async () => {
    const bellowPrice = {
      belowPrice: 5000000,
    }

    const response = await request(app)
      .get('/photographies')
      .query(bellowPrice)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get photographies with search Byname', async () => {
    const search = {
      search: `David`,
    }
    const response = await request(app)
      .get('/photographies')
      .query(search)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get photographies with search price to lowest', async () => {
    const price = {
      price: `lowest`,
    }
    const response = await request(app)
      .get('/photographies')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get photographies with search price to higest', async () => {
    const price = {
      price: `higest`,
    }
    const response = await request(app)
      .get('/photographies')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
})

describe('when GET /photographies/:id', () => {
  it(`should response 200 and Get photographies by id`, async () => {

    const response = await request(app)
      .get('/photographies/1')
     
    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
  it(`should response 404 and error photographies data not Found`, async () => {

    const response = await request(app)
      .get('/photographies/100')
     
      const { body } = response
      expect(response.status).toEqual(404);
      expect(body.message).toBeDefined();
  })
  it(`should response 500 and error internal server Error`, async () => {
    const response = await request(app)
      .get('/photographies/:id')
     
      const { body } = response
      expect(response.status).toEqual(500);
      expect(body.message).toBeDefined();
  })
})



