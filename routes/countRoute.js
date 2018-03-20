var express = require('express');
var router = express.Router();
var cnt = require('../models/CountModel');

router.get('/:id', function (req, res, next) {
    if (req.params.id == '1') {
        cnt.getcntUser(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if(req.params.id == '2'){
        cnt.getcntProduct(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if(req.params.id == '3'){
        cnt.getcntOrder(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else{
        cnt.getcntEmp(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
module.exports = router;