var db=require('../dbconnection');
var wish={
    getwishid:function(id,callback)
    {
      return  db.query("select p.*,w.*  from product_table p ,wish_table w where  w.w_fk_product_id=p.product_id and w.w_fk_user_email=? ",[id],callback);
    },
    deletewish:function(id,callback)
    {
      return db.query("delete from wish_table where wish_id=?",[id],callback);
    },
    getallwish:function(callback)
    {
      return db.query("select * from wish_table",callback);
    },
    getWishByEmail:function(pid,email,callback)
    {
      return db.query("select wish_id from wish_table where w_fk_product_id=? and w_fk_user_email=?",[pid,email],callback)
    },
    alldelete:function(id,callback)
    {
      return db.query("delete from wish_table where w_fk_user_email=?",[id],callback)
    },
    addWish:function(wish,callback)
    {
      return db.query("insert into wish_table values(?,?,?)",[wish.wish_id,wish.w_fk_product_id,wish.w_fk_user_email],callback);
    }
};
module.exports=wish;
