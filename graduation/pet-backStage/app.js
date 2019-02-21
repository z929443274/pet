var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
=======
<<<<<<< HEAD
var petServiceRouter = require('./routes/petService');
var beautifyRouter = require('./routes/beautify');
var trusteeshipRouter = require('./routes/trusteeship');

=======
<<<<<<< HEAD
>>>>>>> c6508406ea9e619fb2c48efb20c95b25d7ef33eb
var petOwnerRouter =  require('./routes/petOwner');
var toyRouter = require('./routes/toy');
var foodRouter = require('./routes/food');
var showerRouter = require('./routes/shower');
// var commodityRouter = require('./routes/commodity');
<<<<<<< HEAD
=======
>>>>>>> 1fab00bf5a62c0c220c0e18957e7143099248351
>>>>>>> 52cedddcdec46ddbd86bae30c6c35b279fb12482
>>>>>>> c6508406ea9e619fb2c48efb20c95b25d7ef33eb

var app = express();
require('./dao/database.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
=======
<<<<<<< HEAD
app.use('/petService', petServiceRouter);
app.use('/beautify', beautifyRouter);
app.use('/trusteeship', trusteeshipRouter);

=======
<<<<<<< HEAD
>>>>>>> c6508406ea9e619fb2c48efb20c95b25d7ef33eb
app.use('/petOwner',petOwnerRouter);
app.use('/toy', toyRouter);
app.use('/food', foodRouter);
app.use('/shower', showerRouter);
// app.use('/commodity', commodityRouter);
<<<<<<< HEAD
=======
>>>>>>> 1fab00bf5a62c0c220c0e18957e7143099248351
>>>>>>> 52cedddcdec46ddbd86bae30c6c35b279fb12482
>>>>>>> c6508406ea9e619fb2c48efb20c95b25d7ef33eb

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
