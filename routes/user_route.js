var express = require('express');
var router = express.Router();
var user=require('../models/usermodel');

router.get('/:id',function(req,res,next){

        user.getUserById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.put('/:id',function(req,res,next){

    user.editUser(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;