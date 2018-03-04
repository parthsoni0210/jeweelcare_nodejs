var express = require('express');
var router = express.Router();
var review = require('../models/review_model');

router.get('/:star/:pid', function (req, res, next) {
    
    review.getStarCount(req.params.star,req.params.pid, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;