var express = require('express');
var router = express.Router();
var live_demo=require('../models/live_demo');

router.get('/:status',function(req,res,next){
    
    live_demo.getDemoByStatus(req.params.status,function(err,rows){
    
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