var express = require('express');
var router = express.Router();
var order=require('../models/order');

router.get('/:id?',function(req,res,next){
    
   if(req.params.id){
    
   order.getOrderById(req.params.id,function(err,rows){
    
   if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
     });
    }
    else{
    
    order.getAllOrder(function(err,rows){
    
   if(err)
     {
     res.json(err);
     }
     else
     {
     res.json(rows);
     }
    
    });
    }
    });
    router.post('/',function(req,res,next){
    
    order.addOrder(req.body,function(err,count){
    console.log(req.body);
      if(err)
     {
     res.json(err);
     }
     else{
     res.json(req.body);//or return count for 1 &amp;amp;amp; 0
     }
     });
    });
    router.delete('/:id',function(req,res,next){
    
    order.deleteOrder(req.params.id,function(err,count){
    
   if(err)
     {
     res.json(err);
     }
     else
     {
     res.json(count);
     }
    
   });
    });
    router.put('/:id',function(req,res,next){
    
    order.updateOrder(req.params.id,req.body,function(err,rows){
    
   if(err)
     {
     res.json(err);
     }
     else
     {
     res.json(rows);
     }
     });
    });
    module.exports=router;