var express = require('express');
var router = express.Router();
var cart = require('../models/cartmodel');

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    cart.getCartById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    cart.getAllCart(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});
router.post('/', function (req, res, next) {

  cart.addCart(req.body, function (err, count) {
    console.log(req.body);
    if (err) {
      res.json(err);
    }
    else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});
router.delete('/:id', function (req, res, next) {

  cart.deleteCart(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});

router.put('/:id', function (req, res, next) {

  cart.updateCart(req.params.id, req.body, function (err, rows) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;