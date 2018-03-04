var db=require('../dbconnection');

var review={

    getParticularReview:function(pid,email,callback){
        db.query("select * from review_table where r_fk_product_id=? and r_fk_email_id=?",[pid,email],callback);
    }

}
module.exports=review;