var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var categories=require('./routes/categories');
var routes = require('./routes/index');
var users = require('./routes/users');
var user_login=require('./routes/user_login');
var user_signup=require('./routes/user_signup');
var products=require('./routes/products');
var cart=require('./routes/cart_route');
var org=require('./routes/org_route');
var order=require('./routes/order_route');
var pro_cat=require('./routes/pro_cat_route');
var pro_order=require('./routes/order_join_route');
var pro_cart=require('./routes/cart_join_route');
var review=require('./routes/review_route');
var review2=require('./routes/one_review')
var usr= require('./routes/user_route');
//var filter1=require('./routes/filter_route');
var filter2=require('./routes/filter_noprice');
var filter1=require('./routes/filter_route2');
var order_review=require('./routes/order_review');
var reviewId=require('./routes/reviewById');
var avgRate=require('./routes/AvgReview_route');
var cntRate=require('./routes/cntRating_route');
var cntReview=require('./routes/cntReview_route');
var starcnt=require('./routes/starCount');
var revPid=require('./routes/reviewByPid');
var wish=require('./routes/wishrouter');
var wishDlt=require('./routes/wishalldeleterouter');
var ldemo=require('./routes/demo_route');
var updt_price=require('./routes/update_Price');
var order_id=require('./routes/order_id_route');
var orderCity=require('./routes/orderCity');

var cnt=require('./routes/countRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/categories',categories);
app.use('/login',user_login);
app.use('/signup',user_signup);
app.use('/products',products);
app.use('/cart',cart);
app.use('/organization',org);
app.use('/orders',order);
app.use('/pro_cat',pro_cat);
app.use('/pro_order',pro_order);
app.use('/pro_cart',pro_cart);
app.use('/review',review);
app.use('/one_review',review2);
app.use('/user',usr);
app.use('/filter_price',filter1);
app.use('/filter_noprice',filter2);
app.use('/filter',filter1);
app.use('/order_review',order_review);
app.use('/reviewId',reviewId);
app.use('/avgRating',avgRate);
app.use('/cntRating',cntRate);
app.use('/cntReview',cntReview);
app.use('/starCount',starcnt);
app.use('/reviewByPid',revPid);
app.use('/wishlist',wish);
app.use('/wishAllDelete',wishDlt);
app.use('/live_demo',ldemo);
app.use('/update_price',updt_price);
app.use('/order_id',order_id);
app.use('/order_city',orderCity);

app.use('/count',cnt);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
