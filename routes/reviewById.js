var express = require('express');
var router = express.Router();
var review = require('../models/review_model');

router.get('/:id', function (req, res, next) {
    
    review.getReviewById(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;