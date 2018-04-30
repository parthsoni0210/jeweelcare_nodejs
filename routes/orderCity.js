var express = require('express');
var router = express.Router();
var order = require('../models/order');

router.get('/:status/:cat', function (req, res, next) {

    order.orderChart(req.params.status, req.params.cat, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});

module.exports = router;