module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET,
    },
  },
});
