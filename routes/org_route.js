var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var org = require('../models/org_model');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/category/')
  },
  filename: (req, file, cb) => {
    //x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({ storage: storage });


router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    org.getOrgById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    org.getAllOrg(function (err, rows) {

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

  org.addOrg(req.body, function (err, count) {
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

  org.deleteOrg(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});
router.put('/', upload.single('image'), function (req, res, next) {
  if (req.file) {

    org.updateOrg(req.body, req.file.filename, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else{

    org.updateOrg(req.body,' ', function (err, rows) {

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