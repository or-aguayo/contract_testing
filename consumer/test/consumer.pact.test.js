const path = require('path');
const { Pact } = require('@pact-foundation/pact');
const { registerUser } = require('../src/consumer');

describe('UserClient consumer', () => {
  const provider = new Pact({
    consumer: 'UserClient',
    provider: 'UserService',
    dir: path.resolve(process.cwd(), '../pacts'),
    logLevel: 'info'
  });

  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());
  afterEach(() => provider.verify());

  it('registers a user', async () => {
    await provider.addInteraction({
      state: 'provider accepts a new user',
      uponReceiving: 'a request to create a user',
      withRequest: {
        method: 'POST',
        path: '/users',
        headers: { 'Content-Type': 'application/json' },
        body: { id: 1, name: 'Alice' }
      },
      willRespondWith: {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
        body: { id: 1, name: 'Alice' }
      }
    });

    const response = await registerUser(provider.mockService.baseUrl, { id: 1, name: 'Alice' });
    expect(response).toEqual({ id: 1, name: 'Alice' });
  });
});
