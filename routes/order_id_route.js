var express = require('express');
var router = express.Router();
var pro_order = require('../models/order');

router.get('/:id', function (req, res, next) {

    pro_order.getOrderById(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;