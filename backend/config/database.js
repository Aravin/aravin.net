module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db.dgwahuftgzpncwiwctdg.supabase.co'),
        port: env.int('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '$+ww:=#3TMqb(zn."(6c&^gK},bYPSWg'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
