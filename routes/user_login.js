var express = require('express');
var router = express.Router();
var user=require('../models/usermodel');

router.post('/',function(req,res,next){

        user.user_login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.get('/',function(req,res,next){

    user.getalluser(function(err,rows){
        res.json(rows);
    });

});
module.exports=router;