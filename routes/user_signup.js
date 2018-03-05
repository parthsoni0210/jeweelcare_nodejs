var express = require('express');
var router = express.Router();

var multer = require('multer');
var path = require('path');

var user=require('../models/usermodel');

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


router.post('/',upload.single('image'),function(req,res,next){

        user.sign_up(req.body,req.file.filename,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.put('/',function(req,res,next){

    user.changePass(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;