export default () => ({
  app: {
    port:
      typeof process.env.PORT === 'string'
        ? parseInt(process.env.PORT, 10)
        : null,
    cookie_secret: process.env.COOKIE_SECRET,
  },
});
