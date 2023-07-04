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
  deleteUser()
  deleteVenue()
  deletePhotography()
  deleteCathering()
  deleteProduct()
})

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYXRoaXJAZ21haWwuY29tIiwicm9sZSI6bnVsbCwiaWF0IjoxNjg4Mzg5MTM1fQ.gGBpmkweQr0aO5keydrDjftaTWS3xHB3OgEbDlTpTE0"
describe('when POST /carts', () => {
  it('should response 201 and created cart', async () => {
    const requestPayload = {
      title: "test",
      bride: "test",
      groom: "test",
      weddingDate: "2023/08/18",
      contactNumber: 123456790,
      address: "test",
      PhotographyId: 1,
      CatheringId: 1,
      VenueId: 1,
      totalPrice: 100000000,
      pax: 300,
    };

    const response = await request(app)
      .post('/carts')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })

  it('should response 400 and error Date input', async () => {
    const requestPayload = {
      title: "test",
      bride: "test",
      groom: "test",
      weddingDate: "2023/07/18",
      contactNumber: 123456790,
      address: "test",
      PhotographyId: 1,
      CatheringId: 1,
      VenueId: 1,
      totalPrice: 100000000,
      pax: 300,
    };

    const response = await request(app)
      .post('/carts')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })
})

describe('when POST /carts/:idProduct', () => {
  it('should response 201 and created cart by id Product ', async () => {
    const requestPayload = {
      totalPrice: 10000000,
      pax: 100,
      groom: 'test',
      bride: 'test',
      weddingDate: "2023/08/18",
      contactNumber: 123456789,
      address: "asdfghjklq"
    }

    const response = await request(app)
      .post('/carts/1')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })

  it('should response 400 and error Date input', async () => {
    const requestPayload = {
      totalPrice: 10000000,
      pax: 100,
      groom: 'test',
      bride: 'test',
      weddingDate: "2023/07/18",
      contactNumber: 123456789,
      address: "asdfghjklq"
    }

    const response = await request(app)
      .post('/carts/1')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(400);
    expect(body.message).toBeDefined();
  })

  it('should response 404 and error Cart Not Found', async () => {
    const requestPayload = {
      totalPrice: 10000000,
      pax: 100,
      groom: 'test',
      bride: 'test',
      weddingDate: "2023/07/18",
      contactNumber: 123456789,
      address: "asdfghjklq"
    }

    const response = await request(app)
      .post('/carts/100')
      .send(requestPayload)
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(404);
    expect(body.message).toBeDefined();
  })
})

describe('when GET /carts', () => {
  it('should response 200 and Get cart', async () => {
    const response = await request(app)
      .get('/carts')
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Object);
  })
})

describe('when DELETE /carts/:cartid', () => {
  it('should response 200 and Delete Carts by Id', async () => {
    const response = await request(app)
      .delete('/carts/1')
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })

  it('should response 404 and Cart Not Found', async () => {
    const response = await request(app)
      .delete('/carts/100')
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(404);
    expect(body.message).toBeDefined();
  })
})

describe('when DELETE /carts', () => {
  it('should response 200 and Delete All Carts', async () => {
    const response = await request(app)
      .delete('/carts')
      .set('access_token', `${token}`);

    const { body } = response
    expect(response.status).toEqual(201);
    expect(body.message).toBeDefined();
  })
})