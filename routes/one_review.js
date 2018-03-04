var express = require('express');
var router = express.Router();
var review = require('../models/review_model');

router.get('/:email', function (req, res, next) {
    
    review.getOrderReview(req.params.email, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;