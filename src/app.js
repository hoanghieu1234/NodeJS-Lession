require('dotenv').config();
//init database mongoDB
require('./db/connect.mongoDB');
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieRoute = require('./routes/cookie.route');
const session = require('express-session');
const sessionRoute = require('./routes/session.route');
// const Redis = require('ioredis');
// const RedisStore = require('connect-redis').default;
// const clientRedis = new Redis();
const baiTapRoute = require('./routes/baitap.route');
const userRoute = require('./routes/user.route');
const path = require('path');

const app = express();

//init middleware global
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: 'vu dep trai',
    // store: new RedisStore({ client: clientRedis }),
    resave: false, // đặt lại session cookie cho mỗi yêu cầu, giả sử cookie hết sau 10 phút  thì nó tự động đặt thêm 10 phút nữa khi mỗi yêu cầu được xảy ra
    saveUninitialized: true, //bất kể có
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

// Config view for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//init routers
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello World',
  });
});

app.use('/session', sessionRoute);

app.use('/cookie', cookieRoute);

//set up cho ejs
app.use('/baitap', baiTapRoute);

//route api with sequelize
app.use('/user', userRoute);
//handling error
module.exports = app;
