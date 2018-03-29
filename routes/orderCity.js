var express = require('express');
var router = express.Router();
var order=require('../models/order');

router.get('/:city',function(req,res,next){
    
    order.getOrderByCity(req.params.city,function(err,rows){
    
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