var mysql=require('mysql');
var cnn=mysql.createPool({

host:'jewelcare.db.9462939.19c.hostedresource.net',
user:'jewelcare',
password:'Keyur@9898',
database:'jewelcare' 

});
module.exports=cnn;