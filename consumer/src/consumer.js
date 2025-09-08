const fetch = require('node-fetch');

exports.registerUser = async function (baseUrl, user) {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error('Failed to register user');
  }
  return response.json();
};
