var express = require('express');
var router = express.Router();
var wish = require('../models/wishmodel');
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        wish.getwishid(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);

            }
            else {
                res.json(rows);
            }
        });
    }
    else {
            wish.getallwish( function (err, rows) {
            if (err) {
                res.json(err);

            }
            else {
                res.json(rows);
            }
        });

    }
});

router.post('/',function(req,res,next){

    wish.addWish(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    wish.deletewish(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;