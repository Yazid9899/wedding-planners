const request = require('supertest');
const app = require('../app');
const { insertProduct, insertPhotography, insertVenue, insertCathering } = require('../lib/createDataTest');
const { deletePhotography, deleteVenue, deleteCathering, deleteProduct } = require('../lib/deleteDataTest');

beforeAll(async () => {
  insertVenue()
  insertPhotography()
  insertCathering()
  insertProduct()

})

afterAll(async () => {
  deleteVenue()
  deletePhotography()
  deleteCathering()
  deleteProduct()
})

describe('when GET /products', () => {
  it('should response 200 and Get venues', async () => {
    const response = await request(app)
      .get('/products')

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
})

describe('when GET /products/:id', () => {
  it('should response 200 and Get products', async () => {
    const response = await request(app)
      .get('/products/1')

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
  it(`should response 404 and error products data not Found`, async () => {
    const response = await request(app)
      .get('/products/100')

    const { body } = response
    expect(response.status).toEqual(404);
    expect(body.message).toBeDefined();
  })
  
  it(`should response 500 and error internal server Error`, async () => {
    const response = await request(app)
      .get('/products/:id')

    const { body } = response
    expect(response.status).toEqual(500);
    expect(body.message).toBeDefined();
  })
})

