var db=require('../dbconnection');

var org={
    org_login:function(user,callback){
        return  db.query('select * from org_user_table where org_user_email=? and org_user_password=?',[user.org_user_email,user.org_user_password],callback);
    },

    getAllOrg:function(callback){
        db.query("select * from org_user_table",callback);
    },
    
    getOrgByDesignBranch:function(desig,branch,callback){
        if(branch!='all')
        {
            db.query("select * from org_user_table where org_user_desig=? and org_user_branch=?",[desig,branch],callback);
        }
        else
        {
            db.query("select * from org_user_table where org_user_desig=?",[desig],callback);
        }
    },

    getOrgById:function(id,callback){
        db.query("select * from org_user_table where org_user_email=?",[id],callback);
    },

    addOrg:function(p,callback){
        p.org_user_image='https://jewelcare.herokuapp.com/images/users/default.jpg';
        db.query("insert into org_user_table values(?,?,?,?,?,?,?,?,?)",[p.org_user_email,p.org_user_name,p.org_user_mobileno,p.org_user_address,p.org_user_gender,p.org_user_desig,p.org_user_branch,p.org_user_image,p.org_user_password],callback);
    
    },

    deleteOrg:function(id,callback){
        db.query("delete from org_user_table where org_user_email=?",[id],callback);
    },

    updateOrg:function(p,filename,callback){
        if (filename != ' ') {
            filename = "https://jewelcare.herokuapp.com/images/users/" + filename;
        }
        else
        {
            filename = "https://jewelcare.herokuapp.com/images/users/default.jpg";
        }
        db.query("update org_user_table set org_user_name=?,org_user_mobileno=?,org_user_address=?,org_user_gender=?,org_user_image=? where org_user_email=?",[p.org_user_name,p.org_user_mobileno,p.org_user_address,p.org_user_gender,filename,p.org_user_email],callback);
    },

    changePass(org,callback){
        return  db.query('update org_user_table set org_user_password=? where org_user_email=?',[org.org_user_password,org.org_user_email],callback);
    }

};

module.exports=org;