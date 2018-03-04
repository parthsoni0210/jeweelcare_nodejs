var express = require('express');
var router = express.Router();
var product = require('../models/product');

router.get('/:id', function (req, res, next) {

    product.getProductByCat(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;