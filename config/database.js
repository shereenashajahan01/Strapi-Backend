module.exports = ({ env }) => ({
  defaultConnection: "default",
  "backup-restore": {
    postgres: {
      // Update with your path
      pathToPgDump: "C:/Program Files/PostgreSQL/13/bin/pg_dump",
    },
  },
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "3.237.194.48"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "fdp_db"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "fdpAdmin"),
        schema: env("DATABASE_SCHEMA", "public"),
      ssl: { rejectUnauthorized: false }
      },
       options: {
          ssl: false
        },
    },
  },
});

