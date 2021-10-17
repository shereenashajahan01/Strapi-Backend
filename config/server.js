module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '342c721fd147b63e582105117d36d849'),
    },
    watchIgnoreFiles: ["**/private/**"],
  },
});
