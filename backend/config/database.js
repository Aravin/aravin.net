module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('INSTANCE_CONNECTION_NAME', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'aravin_net_local'),
      user: env('DATABASE_USER', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
  },
});
