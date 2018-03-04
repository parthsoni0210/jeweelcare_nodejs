var express = require('express');
var router = express.Router();
var user=require('../models/usermodel');

router.post('/',function(req,res,next){

        user.sign_up(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.put('/',function(req,res,next){

    user.changePass(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;