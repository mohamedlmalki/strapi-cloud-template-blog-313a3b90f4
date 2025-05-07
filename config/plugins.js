module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: '"Your Sender Name" <no-reply@strapi.io>',
      },
    },
  },
  // ...
});
