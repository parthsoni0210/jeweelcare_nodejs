var db = require('../dbconnection'); //reference of dbconnection.js

var cnt = {

    getcntUser(callback) {
        return db.query("select COUNT(*) from user_table");
    },
    getcntProduct(callback) {
        return db.query("select COUNT(*) from product_table");
    },
    getcntOrder(callback) {
        return db.query("select COUNT(*) from order_table");
    },
    getcntEmp(callback) {
        return db.query("select COUNT(*) from org_user_table");
    }

}

module.exports=cnt;