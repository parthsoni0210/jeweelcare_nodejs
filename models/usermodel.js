var db=require('../dbconnection'); //reference of dbconnection.js

var users={
    
        
        user_login:function(user,callback){
        return  db.query('select * from user_table where user_email=? and user_password=?',[user.user_email,user.user_password],callback);
        },
        sign_up:function(user,callback){
            return db.query('insert into user_table values(?,?,?,?,?,?,?,?)',[user.user_name,user.user_mobile_no,user.user_email,user.user_gender,user.user_bday,user.user_address,user.user_image,user.user_password],callback);
        },
        getalluser:function(callback){           
                return  db.query('select * from user_table ',callback);
        },
        getUserById:function(id,callback){
            return db.query('select * from user_table where user_email=?',[id],callback);
        },
        editUser:function(id,user,callback){
            return db.query('update user_table set user_name=?, user_mobile_no=?, user_gender=?, user_bday=?, user_image=? where user_email=?',[user.user_name,user.user_mobile_no,user.user_gender,user.user_bday,user.user_image,id],callback)
        },
        changePass(user,callback){
            return  db.query('update user_table set user_password=? where user_email=?',[user.user_password,user.user_email],callback);
        }
    };
    
    module.exports=users;