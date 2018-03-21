var db=require('../dbconnection'); //reference of dbconnection.js

var users={
        
        user_login:function(user,callback){
        return  db.query('select * from user_table where user_email=? and user_password=?',[user.user_email,user.user_password],callback);
        },
        sign_up:function(user,filename,callback){
            if(this.filename=="default"){
                filename="https://jewelcare.herokuapp.com/images/users/default.jpg";
            }
            else
            {
                filename="https://jewelcare.herokuapp.com/images/users/"+filename;
            }
            return db.query('insert into user_table values(?,?,?,?,?,?,?,?)',[user.user_name,user.user_mobile_no,user.user_email,user.user_gender,user.user_bday,user.user_address,filename,user.user_password],callback);
        },
        getalluser:function(callback){           
                return  db.query('select * from user_table ',callback);
        },
        getUserById:function(id,callback){
            return db.query('select * from user_table where user_email=?',[id],callback);
        },
        editUserImgUpload:function(user,filename,callback){
            filename="https://jewelcare.herokuapp.com/images/"+filename;
            return db.query('update user_table set user_name=?, user_mobile_no=?, user_gender=?, user_bday=?, user_image=? where user_email=?',[user.user_name,user.user_mobile_no,user.user_gender,user.user_bday,filename,user.user_email],callback)
        },
        editUser:function(user,callback){
            return db.query('update user_table set user_name=?, user_mobile_no=?, user_gender=?, user_bday=?, user_image=? where user_email=?',[user.user_name,user.user_mobile_no,user.user_gender,user.user_bday,user.user_image,user.user_email],callback)
        },
        changePass(user,callback){
            return  db.query('update user_table set user_password=? where user_email=?',[user.user_password,user.user_email],callback);
        }
    };
    
    module.exports=users;