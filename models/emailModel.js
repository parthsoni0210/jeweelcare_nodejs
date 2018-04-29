var email   = require("emailjs/email");
var demo={

sendMail:function(demo,callback){

var server  = email.server.connect({
   user:    "rathodkeyur1251@gmail.com", 
   password:"gj1nm2128", 
   host:    "smtp.gmail.com", 
   ssl:     true,
   port:465
});

server.send({
   text:    demo.message,
   from:    "reunirc@gmail.com", 
   to:      demo.name,
   subject: demo.subject
}, callback);
}


}
module.exports = demo;