var db = require('../dbconnection'); //reference of dbconnection.js

var pro = {

    getByAllFilter: function (diamond, color, ideal, cat, price, callback) {

//0
        if (price != 200000 && diamond != "all" && color != "all" && ideal != "all" && cat != 0) {
            //all filter
            return db.query('select * from product_table where diamond=? and gold_color=? and ideal_for=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [diamond, color, ideal, cat, price], callback);
        }
//1
        else if (price == 200000 && diamond != "all" && color != "all" && ideal != "all" && cat != 0) {
            //no price
            return db.query('select * from product_table where diamond=? and ideal_for=? and gold_color=? and fk_cat_id=? and product_soh>0', [diamond, ideal, color, cat], callback);
        }

        else if (price != 200000 && diamond == "all" && color != "all" && ideal != "all" && cat != 0) {
            //no diamond
            return db.query('select * from product_table where gold_color=? and ideal_for=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [color, ideal, cat, price], callback);
        }

        else if (price != 200000 && diamond != "all" && color == "all" && ideal != "all" && cat != 0) {
            //no color
            return db.query('select * from product_table where diamond=? and ideal_for=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [diamond, ideal, cat, price], callback);
        }

        else if (price != 200000 && diamond != "all" && color != "all" && ideal == "all" && cat != 0) {
            //no ideal for
            return db.query('select * from product_table where diamond=? and gold_color=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [diamond, color, cat, price], callback);
        }

        else if (price != 200000 && diamond != "all" && color != "all" && ideal != "all" && cat == 0) {
            //no cat
            return db.query('select * from product_table where diamond=? and gold_color=? and ideal_for=? and product_soh>0 and product_price <= ?', [diamond, color, ideal, price], callback);
        }
//2
        //price
        else if (price == 200000 && diamond == "all" && color != "all" && ideal != "all" && cat != 0) {
            //no price,no diamond
            return db.query('select * from product_table where ideal_for=? and gold_color=? and fk_cat_id=? and product_soh>0', [ideal, color, cat], callback);
        }
        else if (price == 200000 && diamond != "all" && color == "all" && ideal != "all" && cat != 0) {
            //no color,no price
            return db.query('select * from product_table where diamond=? and ideal_for=? and fk_cat_id=? and product_soh>0', [diamond, ideal, cat], callback);
        }
        else if (price == 200000 && diamond != "all" && color != "all" && ideal == "all" && cat != 0) {
            //no price,no ideal
            return db.query('select * from product_table where diamond=? and gold_color=? and fk_cat_id=? and product_soh>0', [diamond, color, cat], callback);
        }
        else if (price == 200000 && diamond != "all" && color != "all" && ideal != "all" && cat == 0) {
            //no price,no cat
            return db.query('select * from product_table where diamond=? and ideal_for=? and gold_color=? and product_soh>0', [diamond, ideal, color], callback);
        }

        //diamond
        else if (price != 200000 && diamond == "all" && color == "all" && ideal != "all" && cat != 0) {
            //no diamond and no color
            return db.query('select * from product_table where ideal_for=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [ideal, cat, price], callback);
        }
        else if (price != 200000 && diamond == "all" && color != "all" && ideal == "all" && cat != 0) {
            //no diamond, no ideal
            return db.query('select * from product_table where gold_color=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [color, cat, price], callback);
        }
        else if (price != 200000 && diamond == "all" && color != "all" && ideal != "all" && cat == 0) {
            //no diamond,no cat
            return db.query('select * from product_table where gold_color=? and ideal_for=? and product_soh>0 and product_price <= ?', [color, ideal, price], callback);
        }

        //color
        else if (price != 200000 && diamond != "all" && color == "all" && ideal == "all" && cat != 0) {
            //no color,no ideal for
            return db.query('select * from product_table where diamond=? and fk_cat_id=? and product_soh>0 and product_price <= ?', [diamond, cat, price], callback);
        }
        else if (price != 200000 && diamond != "all" && color == "all" && ideal != "all" && cat == 0) {
            //no color,no cat
            return db.query('select * from product_table where diamond=? and ideal_for=? and product_soh>0 and product_price <= ?', [diamond, ideal, price], callback);
        }

        //ideal for
        else if (price != 200000 && diamond != "all" && color != "all" && ideal == "all" && cat == 0) {
            //no ideal,no cat
            return db.query('select * from product_table where diamond=? and gold_color=? and product_soh>0 and product_price <= ?', [diamond, color, price], callback);
        }

//3
        //price
        else if (price == 200000 && diamond == "all" && color == "all" && ideal != "all" && cat != 0) {
            //no diamond,no color,no price
            return db.query('select * from product_table where ideal_for=? and fk_cat_id=? and product_soh>0', [ideal, cat], callback);
        }
        else if (price == 200000 && diamond == "all" && color != "all" && ideal == "all" && cat != 0) {
            //no diamond,no ideal,no price
            return db.query('select * from product_table where gold_color=? and fk_cat_id=? and product_soh>0', [color, cat], callback);
        }
        else if (price == 200000 && diamond == "all" && color != "all" && ideal != "all" && cat == 0) {
            //no diamond,no cat,no price
            return db.query('select * from product_table where gold_color=? and ideal_for=? and product_soh>0', [color, ideal], callback);
        }
        else if (price == 200000 && diamond != "all" && color == "all" && ideal == "all" && cat != 0) {
            //no color,no price,no ideal
            return db.query('select * from product_table where diamond=? and fk_cat_id=? and product_soh>0', [diamond, cat], callback);
        }
        else if (price == 200000 && diamond != "all" && color == "all" && ideal != "all" && cat == 0) {
            //no color,no price,no cat
            return db.query('select * from product_table where diamond=? and ideal_for=? and product_soh>0', [diamond, ideal], callback);
        }
        else if (price == 200000 && diamond != "all" && color != "all" && ideal == "all" && cat == 0) {
            //no price,no ideal,no cat
            return db.query('select * from product_table where diamond=? and gold_color=? and product_soh>0', [diamond, color], callback);
        }

        //diamond
        else if (price != 200000 && diamond == "all" && color == "all" && ideal == "all" && cat != 0) {
            //no diamond and no color and no ideal for
            return db.query('select * from product_table where fk_cat_id=? and product_soh>0 and product_price <= ?', [cat, price], callback);
        }
        else if (price != 200000 && diamond == "all" && color == "all" && ideal != "all" && cat == 0) {
            //no diamond,no color,no cat
            return db.query('select * from product_table where ideal_for=? and product_soh>0 and product_price <= ?', [ideal, price], callback);
        }
        else if (price != 200000 && diamond == "all" && color != "all" && ideal == "all" && cat == 0) {
            //no diamond,no ideal,no cat
            return db.query('select * from product_table where gold_color=? and product_soh>0 and product_price <= ?', [color, price], callback);
        }

        //color
        else if (price != 200000 && diamond != "all" && color == "all" && ideal == "all" && cat == 0) {
            //no color,no ideal for,no cat
            return db.query('select * from product_table where diamond=? and product_soh>0 and product_price <= ?', [diamond, price], callback);
        }
    
//4
        //price
        else if (price == 200000 && diamond == "all" && color == "all" && ideal == "all" && cat != 0) {
            //no diamond,no price,no color,no ideal (only cat)
            return db.query('select * from product_table where fk_cat_id=? and product_soh>0', [cat], callback);
        }
        else if (price == 200000 && diamond == "all" && color != "all" && ideal == "all" && cat == 0) {
            //no diamond,no price,no ideal,no cat(only color)
            return db.query('select * from product_table where gold_color=? and product_soh>0', [color], callback);
        }
        else if (price == 200000 && diamond == "all" && color == "all" && ideal != "all" && cat == 0) {
            //no diamond,no price,no color,no cat(only ideal)
            return db.query('select * from product_table where ideal_for=? and product_soh>0', [ideal], callback);
        }
        else if (price == 200000 && diamond != "all" && color == "all" && ideal == "all" && cat == 0) {
            //no price,no color,no cat,no ideal(only diamond)
            return db.query('select * from product_table where diamond=? and product_soh>0', [diamond], callback);
        }

        //diamond
        else if (price != 200000 && diamond == "all" && color == "all" && ideal == "all" && cat == 0) {
            //no diamond,no color,no ideal,no cat (only price)
            return db.query('select * from product_table where product_soh>0 and product_price <= ?', [price], callback);
        }

//5
        else{
            //no change in filter
            return db.query('select * from product_table where product_soh>0', callback);
        }
    }
};

module.exports = pro;