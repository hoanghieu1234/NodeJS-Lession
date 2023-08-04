const dev = {
  app: {
    port: process.env.NODE_ENV_DEV_PORT || 8080,
  },
  db: {
    user: process.env.NODE_ENV_DEV_DB_MYSQL_USER || 'root',
    host: process.env.NODE_ENV_DEV_DB_MYSQL_HOST || 'localhost',
    name: process.env.NODE_ENV_DEV_DB_MYSQL_NAME || 'devEcome',
    password: process.env.NODE_ENV_DEV_DB_MYSQL_PASSWORD || 'Vuvanbui@18',
    dialect: 'mysql',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const pro = {};
const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
