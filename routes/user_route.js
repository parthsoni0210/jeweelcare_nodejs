var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path')
var user = require('../models/usermodel');

router.get('/:id', function (req, res, next) {

    user.getUserById(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});


router.put('/', upload.single('image'), function (req, res, next) {
    if (req.file != null) {
        user.editUserImgUpload(req.body, req.file.filename, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        user.editUser(req.body, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;