var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var product = require('../models/product');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/products/')
  },
  filename: (req, file, cb) => {
    //x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({ storage: storage });


router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    product.getProductById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    product.getAllProduct(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});
router.post('/', upload.any(), function (req, res, next) {

  product.addProduct(req.body, req.files[0].filename, req.files[1].filename, req.files[2].filename, function (err, count) {
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

  product.deleteProduct(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});
router.put('/:id', upload.any(), function (req, res, next) {

  if (!req.body.product_image1 && !req.body.product_image2 && !req.body.product_image3) {
    product.updateProduct(req.params.id, req.body, req.files[0].filename, req.files[1].filename, req.files[2].filename, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(!req.body.product_image1 && req.body.product_image2 && req.body.product_image3){
    product.updateProduct(req.params.id, req.body, req.files[0].filename, ' ',' ', function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(req.body.product_image1 && !req.body.product_image2 && req.body.product_image3){
    product.updateProduct(req.params.id, req.body,' ', req.files[0].filename,' ', function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(req.body.product_image1 && req.body.product_image2 && !req.body.product_image3){
    product.updateProduct(req.params.id, req.body,' ',' ', req.files[0].filename, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(!req.body.product_image1 && !req.body.product_image2 && req.body.product_image3){
    product.updateProduct(req.params.id, req.body,req.files[0].filename, req.files[1].filename,' ', function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(!req.body.product_image1 && req.body.product_image2 && !req.body.product_image3){
    product.updateProduct(req.params.id, req.body,req.files[0].filename,' ',req.files[1].filename, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else if(req.body.product_image1 && !req.body.product_image2 && !req.body.product_image3){
    product.updateProduct(req.params.id, req.body,' ',req.files[0].filename,req.files[1].filename, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {
    product.updateProduct(req.params.id, req.body, ' ', ' ', ' ', function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;