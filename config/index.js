// basic app config
const Config = {
  basePath: '/', // e.g. /ibm-project-name/
  auth: {
    mode: 'basic-scoped',
    credentials: {
      'staging-url-here': {
        username: 'username',
        password: 'password',
      },
    },
  },
};

module.exports = Config;
