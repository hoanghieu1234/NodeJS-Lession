//level 0
// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: 'localhost',
//     port: 27017,
//     name: 'auth',
//   },
// };

// module.exports = config;

//level 1
//create env dev and production
const dev = {
  app: {
    port: process.env.NODE_ENV_DEV_PORT || 8080,
  },
  db: {
    port: process.env.NODE_ENV_DEV_DB_PORT || 4000,
    host: process.env.NODE_ENV_DEV_DB_HOST || 'localhost',
    name: process.env.NODE_ENV_DEV_DB_NAME || 'devEcome',
  },
};
const pro = {
  app: {
    port: process.env.NODE_ENV_PRO_PORT || 8081,
  },
  db: {
    port: process.env.NODE_ENV_PRO_DB_PORT || 4000,
    host: process.env.NODE_ENV_PRO_DB_HOST || 'localhost',
    name: process.env.NODE_ENV_PRO_DB_NAME || 'proEcome',
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
