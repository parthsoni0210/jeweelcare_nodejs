var express = require('express');
var router = express.Router();
var order = require('../models/order');

router.get('/:city/:cat?', function (req, res, next) {

    if (req.params.cat) {
        order.orderChart(req.params.city,req.params.cat, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        order.getOrderByCity(req.params.city, function (err, rows) {

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