var db = require('../dbconnection'); //reference of dbconnection.js

var pro = {

    getByAllFilter: function (diamond,color,ideal,cat,price,callback) {
        //console.log('select * from product_table where diamond='+diamond+' and ideal_for='+ideal+' and gold_color='+clr+' and fk_cat_id='+cat+' and product_soh>0 and product_price between 5000 and ('+price+')');
        return db.query('select * from product_table where diamond=? and gold_color=? and ideal_for=? and fk_cat_id=? and product_soh>0 and product_price <= ?',[diamond,color,ideal,cat,price], callback);
        //return db.query('select * from product_table where product_price = ?',[price],callback);
    },
    getWithoutPrice: function (diamond,color,ideal,cat, callback) {
        return db.query('select * from product_table where diamond=? and ideal_for=? and gold_color=? and fk_cat_id=?', [diamond, ideal,color,cat], callback);
    }
};

module.exports = pro;