var express = require('express');
var router = express.Router();
var review = require('../models/review_model');

router.get('/:pid', function (req, res, next) {
    
    review.getAvgReview(req.params.pid, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;