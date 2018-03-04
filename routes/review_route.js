var express = require('express');
var router = express.Router();
var review=require('../models/review_model');

router.get('/:id?',function(req,res,next){
    
   if(req.params.id){
    
   review.getProReview(req.params.id,function(err,rows){
    
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
    
   review.getAllReview(function(err,rows){
    
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
    
    review.addReview(req.body,function(err,count){
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
    
    review.deleteReview(req.params.id,function(err,count){
    
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
    
    review.updateReview(req.params.id,req.body,function(err,rows){
    
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