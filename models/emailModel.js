var email = require("emailjs/email");
var forgetPass = {

    sendMail: function (demo, callback) {

        var server = email.server.connect({
            user: "parth.soni0210@gmail.com",
            password: "parth#@123",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text:    demo.message,
            from:    "reunirc@gmail.com", 
            to:      demo.name,
            subject: demo.subject
        }, callback);
    }


}
module.exports = forgetPass;