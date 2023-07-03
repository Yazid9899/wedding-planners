const request = require('supertest');
const app = require('../app');
const UserTableTest = require('../test/UserTest');

afterAll(async() => {
  await UserTableTest.cleanTable()
})

describe('when POST /pub/register', () => {
  afterEach(async() => {
    await UserTableTest.cleanTable()
  })
  it('should response 201 and persisted customer user')
})
