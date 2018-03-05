var express = require('express');
var router = express.Router();

var multer = require('multer');
var path = require('path');
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

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

router.put('/:id',upload.single('image'),function(req,res,next){

    user.editUser(req.params.id,req.body,req.file.filename,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;