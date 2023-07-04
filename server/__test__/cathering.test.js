const request = require('supertest');
const app = require('../app');
const { insertCathering } = require('../lib/createDataTest');
const { deleteCathering } = require('../lib/deleteDataTest');

beforeAll(async () => {
  insertCathering()
})

afterAll(async () => {
  deleteCathering()
})

describe('when GET /catherings', () => {
  it('should response 200 and Get Cathering', async () => {
    const response = await request(app)
      .get('/catherings')

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get Cathering with bellowPrice', async () => {
    const bellowPrice = {
      belowPrice: 2000000,
    }

    const response = await request(app)
      .get('/catherings')
      .query(bellowPrice)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get Cathering with search Byname', async () => {
    const search = {
      search: `Mitra`,
    }
    const response = await request(app)
      .get('/catherings')
      .query(search)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get Cathering with search price to lowest', async () => {
    const price = {
      price: `lowest`,
    }
    const response = await request(app)
      .get('/catherings')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })

  it('should response 200 and Get Cathering with search price to higest', async () => {
    const price = {
      price: `higest`,
    }
    const response = await request(app)
      .get('/catherings')
      .query(price)

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
})

describe('when GET /catherings/:id', () => {
  it(`should response 200 and Get Cathering by id`, async () => {

    const response = await request(app)
      .get('/catherings/1')
     
    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
  it(`should response 404 and error Cathering data not Found`, async () => {

    const response = await request(app)
      .get('/catherings/100')
     
      const { body } = response
      expect(response.status).toEqual(404);
      expect(body.message).toBeDefined();
  })
  it(`should response 500 and error internal server Error`, async () => {
    const response = await request(app)
      .get('/catherings/:id')
     
      const { body } = response
      expect(response.status).toEqual(500);
      expect(body.message).toBeDefined();
  })
})

