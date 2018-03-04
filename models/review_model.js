var db=require('../dbconnection');

var review={

    getAllReview:function(callback){
        db.query("select * from review_table",callback);
    },

    getStarCount:function(star,pid,callback){
        
        db.query("select COUNT(rating) from review_table where rating=? and r_fk_product_id=?",[star,pid],callback);
        
    },

    getReviewById:function(id,callback){
        db.query("select * from review_table where review_id=?",[id],callback);
    },

    getReviewByPid:function(pid,callback){
        db.query("select u.*,r.* from user_table u,review_table r where r.r_fk_product_id=? and r.review!='' and r.r_fk_email_id=u.user_email",[pid],callback);
    },

    addReview:function(c,callback){
        db.query("insert into review_table values(?,?,?,?,?)",[c.review_id,c.r_fk_product_id,c.r_fk_email_id,c.rating,c.review],callback);
    },

    deleteReview:function(id,callback){
        db.query("delete from review_table where review_id=?",[id],callback);
    },

    updateReview:function(id,c,callback){
        db.query("update review_table set rating=?,review=? where review_id=?",[c.rating,c.review,id],callback);
    },

    getProReview:function(id,callback){
        db.query("select r.*,p.* from review_table r,product_table p where r.r_fk_email_id=? and p.product_id=r.r_fk_product_id",[id],callback);
    },

    getAvgReview:function(pid,callback){
        db.query("select AVG(rating) from review_table where r_fk_product_id=?",[pid],callback);
    },

    getCountRating:function(pid,callback){
        db.query("select COUNT(rating) from review_table where r_fk_product_id=?",[pid],callback);
    },

    getCountReview:function(pid,callback){
        db.query("select COUNT(review) from review_table where r_fk_product_id=? and review!='' ",[pid],callback);
    }
};

module.exports=review;