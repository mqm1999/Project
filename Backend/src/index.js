const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// before middleware
app.use(bodyParser.json())
const log = (req, res, next) => {
    console.log('===========================');
    console.log('req.originalUrl', req.originalUrl);
    console.log('req.query', req.query);
    console.log('req.body', req.body);
    console.log('req.params', req.params);
    next();
}

// controllers
const userRouter = require('./user/userRouter')

app.use('./api/user', userRouter)

app.get('/api/v1/test-err', (req, res, next) => {
    next('Có lỗi 1')
  })
  app.get('/api/v1/test-err2', (req, res, next) => {
    throw Error('Có lỗi 2')
  })

// error handle middleware
const {errorHandle} = require('./middlewares/errorHandle')
app.use(errorHandle);

// listening
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
    if (err) console.log('err', err);
    console.log(`API is running at ${PORT}`);
})
