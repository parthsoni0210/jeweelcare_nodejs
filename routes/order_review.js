var express = require('express');
var router = express.Router();
var pro_order = require('../models/order');

router.get('/:id/:email', function (req, res, next) {

    pro_order.getReview(req.params.id,req.params.email, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;