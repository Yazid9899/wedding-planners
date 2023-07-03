const request = require('supertest');
const app = require('../app');
const { insertVenue } = require('../lib/createDataTest');
const { deleteVenue } = require('../lib/deleteDataTest');

beforeAll(async () => {
  insertVenue()
})

afterAll(async () => {
  deleteVenue()
})

describe('when GET /venues', () => {
  it('should response 200 and Get venues', async () => {
    const response = await request(app)
      .get('/venues')

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get venues with bellowPrice', async () => {
    const bellowPrice = {
      belowPrice: 5000000,
    }

    const response = await request(app)
      .get('/venues')
      .query(bellowPrice)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get venues with search Byname', async () => {
    const search = {
      search: `David`,
    }
    const response = await request(app)
      .get('/venues')
      .query(search)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get venues with search location', async () => {
    const location = {
      location: `Jakarta Utara`,
    }
    const response = await request(app)
      .get('/venues')
      .query(location)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get venues with search price to lowest', async () => {
    const price = {
      price: `lowest`,
    }
    const response = await request(app)
      .get('/venues')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get venues with search price to higest', async () => {
    const price = {
      price: `higest`,
    }
    const response = await request(app)
      .get('/venues')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
})

describe('when GET /venues/:id', () => {
  it(`should response 200 and Get venues by id`, async () => {

    const response = await request(app)
      .get('/venues/1')
     
    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
  it(`should response 404 and error venues data not Found`, async () => {

    const response = await request(app)
      .get('/venues/100')
     
      const { body } = response
      expect(response.status).toEqual(404);
      expect(body.message).toBeDefined();
  })
  it(`should response 500 and error internal server Error`, async () => {
    const response = await request(app)
      .get('/venues/:id')
     
      const { body } = response
      expect(response.status).toEqual(500);
      expect(body.message).toBeDefined();
  })
})

