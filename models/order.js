var db=require('../dbconnection');

var order={

    getAllOrder:function(callback){
        db.query("select * from order_table",callback);
    },

    getOrderByEmail:function(id,callback){
        db.query("select * from order_table where fk_email_id=? order by order_status desc",[id],callback);
    },

    getOrderById:function(id,callback){
        db.query("select * from order_table where order_id=?",[id],callback);
    },

    getOrderByStatus:function(status,callback){
        db.query("select * from order_table where order_status=?",[status],callback);
    },

    getOrderByCity:function(city,callback){
        db.query("select * from order_table where delivery_address LIKE '%"+city+"%' ",callback);
    },

    addOrder:function(p,callback){
        db.query("insert into order_table values(?,?,?,?,?,?,?,?,?)",[p.order_id,p.fk_email_id,p.fk_product_id,p.product_qty,p.o_product_weight,p.order_amount,p.delivery_address,p.order_date,p.order_status],callback);
    },

    deleteOrder:function(id,callback){
        db.query("delete from order_table where order_id=?",[id],callback);
    },

    updateOrder:function(id,p,callback){
        db.query("update order_table set order_status=?,order_date=? where order_id=?",[p.order_status,p.order_date,id],callback);
    },

    getProOrder:function(id,callback){
        db.query("select o.*,p.* from order_table o,product_table p where o.fk_email_id=? and p.product_id=o.fk_product_id ORDER BY order_status DESC",[id],callback);
    },

    getReview:function(pid,email,callback)
    {
        db.query("select * from review_table where r_fk_product_id=? and r_fk_email_id=?",[pid,email],callback);
    },
    

    orderChart:function(branch,cat,callback)
    {
        db.query("SELECT o.* , c.* FROM order_table o, category_table c, product_table p WHERE o.delivery_address LIKE '%?%' AND o.fk_product_id = p.product_id AND p.fk_cat_id = c.cat_id AND c.cat_name = ?",[branch,cat,callback]);
    }

};

module.exports=order;