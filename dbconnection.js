var mysql=require('mysql');
var cnn=mysql.createPool({

host:'https://jewelcare.herokuapp.com/',
user:'root',
password:'',
database:'jewelcare' 

});
module.exports=cnn;