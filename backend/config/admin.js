module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someRandomLongString'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
  },
  transfer: { 
    token: { 
      salt: env('TRANSFER_TOKEN_SALT', 'anotherRandomLongString'),
    } 
  },
});
