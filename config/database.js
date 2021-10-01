const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("postgres://vkeonldoimljev:527ca61420721afe51c4397c42fcb249628d8fcb692d6b82bfb7e18f9f344dfd@ec2-44-199-26-122.compute-1.amazonaws.com:5432/daqom94cuir0e9"));
  return{
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-44-199-26-122.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "daqom94cuir0e9"),
        username: env("DATABASE_USERNAME", "vkeonldoimljev"),
        password: env("DATABASE_PASSWORD", "527ca61420721afe51c4397c42fcb249628d8fcb692d6b82bfb7e18f9f344dfd"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: { rejectUnauthorized: false }
      },
       options: {
          ssl: false
        },
    },
  },
}
};
