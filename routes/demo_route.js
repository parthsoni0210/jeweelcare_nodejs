var express = require('express');
var router = express.Router();
var demo = require('../models/live_demo');
router.delete('/:id', function (req, res, next) {
    demo.delete_demo(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.get('/:email', function (req, res, next) {

    demo.getdemo(req.params.email, function (err, rows) {
        if (err) {
            res.json(err);

        } else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {

    demo.addDemo(req.body, function (err, count) {
      console.log(req.body);
      if (err) {
        res.json(err);
      }
      else {
        res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
    });
  });
  

router.put('/:id', function (req, res, next) {

    demo.updateDemo(req.params.id, req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });

module.exports = router;