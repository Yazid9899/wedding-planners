const request = require('supertest');
const app = require('../app');
const { insertProduct, insertPhotography, insertVenue, insertCathering, insertUser } = require('../lib/createDataTest');
const { deletePhotography, deleteVenue, deleteCathering, deleteProduct, deleteUser } = require('../lib/deleteDataTest');

beforeAll(async () => {
  insertUser()
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
  deleteUser()
})

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYXRoaXJAZ21haWwuY29tIiwicm9sZSI6bnVsbCwiaWF0IjoxNjg4Mzg5MTM1fQ.gGBpmkweQr0aO5keydrDjftaTWS3xHB3OgEbDlTpTE0"
describe('when POST /carts', () => {
  it('should response 201 and created cart', async () => {
    const requestPayload = {
      title: 'test',
      PhotographyId: 1,
      CatheringId: 1,
      VenueId: 1,
      totalPrice: 1000000,
      pax: 200
    };

    const response = await request(app)
      .post('/carts')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })
  it('should return an error if the request body is missing required fields', async () => {
    const invalidCartData = {
     
    };

    const response = await request(app)
      .post('/carts')
      .send(invalidCartData);

   
    expect(response.status).toBe(401);

    expect(response.body).toHaveProperty('error');
  });
})