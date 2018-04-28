/* var email = require("emailjs/email");
var forgetPass = {

    sendMail: function(demo, callback) {

        var server = email.server.connect({
            user: "expensetracker8@gmail.com",
            password: "shivanidesai",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text: demo.message,
            from: "expensetracker8@gmail.com",
            to: demo.sendTo,
            subject: demo.subject
        }, callback);
    }


}
module.exports = forgetPass; */