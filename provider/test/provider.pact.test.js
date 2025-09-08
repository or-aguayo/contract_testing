const path = require('path');
const { Verifier } = require('@pact-foundation/pact');
const app = require('../src/server');

describe('UserService provider', () => {
  let server;

  beforeAll(() => {
    const port = 8081;
    server = app.listen(port);
  });

  afterAll(() => {
    server.close();
  });

  it('validates the expectations of UserClient', async () => {
    const opts = {
      providerBaseUrl: 'http://localhost:8081',
      pactUrls: [path.resolve(__dirname, '../../pacts/UserClient-UserService.json')]
    };
    await new Verifier(opts).verifyProvider();
  });
});
