var express = require('express');
var router = express.Router();
var pro_cart = require('../models/cartmodel');

router.get('/:id', function (req, res, next) {

    pro_cart.getProCart(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;