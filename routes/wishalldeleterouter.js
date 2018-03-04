var express = require('express');
var router = express.Router();
var wish = require('../models/wishmodel');
router.delete('/:id', function (req, res, next) {
    wish.alldelete(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.get('/:pid/:email', function (req, res, next) {

    wish.getWishByEmail(req.params.pid,req.params.email, function (err, rows) {
        if (err) {
            res.json(err);

        } else {
            res.json(rows);
        }
    });
});

module.exports = router;