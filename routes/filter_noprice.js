var express = require('express');
var router = express.Router();
var pro=require('../models/filter_model');

router.get('/:diamond/:color/:ideal/:cat',function(req,res,next){
    
    pro.getWithoutPrice(req.params.diamond,req.params.color,req.params.ideal,req.params.cat,function(err,rows){
    
        if(err)
          {
          res.json(err);
          }
          else{
          res.json(rows);
          }
          });
         
    
});

module.exports=router;