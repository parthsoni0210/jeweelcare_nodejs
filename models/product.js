var db=require('../dbconnection');

var product={

    getAllProduct:function(callback){
        db.query("select * from product_table",callback);
    },

    getProductById:function(id,callback){
        db.query("select * from product_table where product_id=?",[id],callback);
    },

    addProduct:function(p,callback){
        db.query("insert into product_table values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[p.product_id,p.product_name,p.product_price,p.product_weight,p.product_image1,p.product_image2,p.product_image3,p.product_soh,p.product_desc,p.diamond,p.gold_color,p.ideal_for,p.fk_cat_id],callback);
    },

    deleteProduct:function(id,callback){
        db.query("delete from product_table where product_id=?",[id],callback);
    },

    updateProduct:function(id,p,callback){

        db.query("update product_table set product_name=?,product_price=?,product_weight=?,product_image1=?,product_image1=?,product_image1=?,product_soh=?,product_desc=?,fk_cat_id=? where product_id=?",[p.product_name,p.product_price,p.product_weight,p.product_image1,p.product_image2,p.product_image3,p.product_soh,p.product_desc,p.fk_cat_id,p.product_id],callback);
    },

    getProductByCat:function(id,callback){
        db.query("select * from product_table where fk_cat_id=?",[id],callback);
    },

    getByAllFilter:function(diamond,clr,ideal,cat,price,callback) {
        console.log('select * from product_table where diamond='+diamond+' and ideal_for='+ideal+' and gold_color='+clr+' and fk_cat_id='+cat+' and product_soh>0 and product_price between 5000 and '+price);
        db.query("select * from product_table where diamond='without' and gold_color='golden' and ideal_for='women' and fk_cat_id=1 and product_soh>0 and product_price < 25000", callback);
    },

    getWithoutPrice:function(arr, callback) {
        db.query('select * from product_table where diamond=? and ideal_for=? and gold_color=? and fk_cat_id=?', [arr.diamond, arr.ideal_for, arr.gold_color, arr.fk_cat_id], callback);
    },

    updatePrice:function(arr,callback){
        db.query("update product_table set product_price=? where product_id=?",[arr.product_price,arr.product_id],callback);
    }

};

module.exports=product;