const app = require('./src/app');
const sequelize = require('./src/db/connect.mysqlDB');

//init server running
const PORTS = process.env.PORT || 4000;
const server = app.listen(PORTS, async () => {
  console.log(`Sever is running at http://localhost:${PORTS}`);
  try {
    await sequelize.authenticate();
    console.log('connect mysql successfully');
  } catch (error) {
    console.log('err', error);
  }
});

process.on('SIGINT', () => {
  server.close(() => console.log(`\n Exit Sever Express`));
});
