var db=require('../dbconnection');

var cart={

    getAllCart:function(callback){
        db.query("select * from cart_table",callback);
    },

    getCartById:function(id,callback){
        db.query("select * from cart_table where cart_id=?",[id],callback);
    },

    addCart:function(c,callback){
        db.query("insert into cart_table values(?,?,?,?)",[c.cart_id,c.fk_email_id,c.fk_product_id,c.product_qty],callback);
    },

    deleteCart:function(id,callback){
        db.query("delete from cart_table where cart_id=?",[id],callback);
    },

    updateCart:function(id,c,callback){
        db.query("update cart_table set product_qty=? where cart_id=?",[c.product_qty,c.cart_id],callback);
    },

    getProCart:function(id,callback){
        db.query("select c.*,p.* from cart_table c,product_table p where c.fk_email_id=? and p.product_id=c.fk_product_id",[id],callback);
    }

};

module.exports=cart;