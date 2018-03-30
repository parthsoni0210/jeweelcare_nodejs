var express = require('express');
var router = express.Router();
var product=require('../models/product');

router.get('/:soh',function(req,res,next){
    
    product.getProductBySoh(req.params.soh,function(err,rows){
    
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