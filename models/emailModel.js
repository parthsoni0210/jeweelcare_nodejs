var email = require("emailjs/email");
var forgetPass = {

    sendMail: function(demo, callback) {

        var server = email.server.connect({
            user: "rathodkeyur42@gmail.com",
            password: "gj1nm2128",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text: demo.message,
            from: "rathodkeyur42@gmail.com",
            to: demo.sendTo,
            subject: demo.subject
        }, callback);
    }


}
module.exports = forgetPass;