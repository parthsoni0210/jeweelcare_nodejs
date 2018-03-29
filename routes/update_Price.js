var express = require('express');
var router = express.Router();
var product = require('../models/product');

router.put('/', function (req, res, next) {

    product.updatePrice(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;