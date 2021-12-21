module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06eaa283bad16757a7fa207175602cfb'),
  },
});
