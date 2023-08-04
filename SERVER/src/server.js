const app = require('./app/app');
const Sequelize = require('./libs/connect.sql');

// PORT
const port = 8080;
app.listen(port, async () => {
  console.log(`Server Express Running At http://localhost:${port}`);
  try {
    await Sequelize.authenticate();
    console.log('Connect Mysql Successfully ');
  } catch (error) {
    console.log(error);
  }
});
