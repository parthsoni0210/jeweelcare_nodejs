var db=require('../dbconnection');

var org={

    getAllOrg:function(callback){
        db.query("select * from org_user_table",callback);
    },

    getOrgById:function(id,callback){
        db.query("select * from org_user_table where org_user_email=?",[id],callback);
    },

    addOrg:function(p,callback){
        db.query("insert into org_user_table values(?,?,?,?,?,?,?,?,?)",[p.org_user_email,p.org_user_name,p.org_user_mobileno,p.org_user_address,p.org_user_gender,p.org_user_desig,p.org_user_branch,p.org_user_image,p.org_user_password],callback);
    },

    deleteOrg:function(id,callback){
        db.query("delete from org_user_table where org_user_email=?",[id],callback);
    },

    updateOrg:function(id,p,callback){

        db.query("update org_user_table set org_user_name=?,org_user_mobileno=?,org_user_address=?,org_user_gender=?,org_user_desig=?,org_user_branch=?,org_user_image=?,org_user_password=? where org_user_email=?",[p.org_user_name,p.org_user_mobileno,p.org_user_address,p.org_user_gender,p.org_user_desig,p.org_user_branch,p.org_user_image,p.org_user_password,id],callback);
    }

};

module.exports=org;