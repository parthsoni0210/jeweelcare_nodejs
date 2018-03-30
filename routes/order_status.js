var express = require('express');
var router = express.Router();
var order=require('../models/order');

router.get('/:status',function(req,res,next){
    
    order.getOrderByStatus(req.params.status,function(err,rows){
    
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