var express = require('express');
var router = express.Router();
var org=require('../models/org_model');

router.post('/',function(req,res,next){

        org.org_login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

module.exports=router;