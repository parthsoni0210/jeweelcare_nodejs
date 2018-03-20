var db = require('../dbconnection'); //reference of dbconnection.js

var cnt = {

    getcntUser(callback) {
        return db.query("select COUNT(*) from user_table",callback);
    },
    getcntProduct(callback) {
        return db.query("select COUNT(*) from product_table",callback);
    },
    getcntOrder(callback) {
        return db.query("select COUNT(*) from order_table",callback);
    },
    getcntEmp(callback) {
        return db.query("select COUNT(*) from org_user_table",callback);
    }

}

module.exports=cnt;