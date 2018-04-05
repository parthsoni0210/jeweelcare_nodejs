var db = require('../dbconnection'); //reference of dbconnection.js

var category = {

    getAllCategory: function (callback) {

        return db.query("Select * from category_table", callback);

    },
    getCategoryById: function (id, callback) {

        return db.query("select * from category_table where cat_id=?", [id], callback);
    },
    addCategory: function (cat, filename, callback) {
        filename = "https://jewelcare.herokuapp.com/images/category/" + filename;
        return db.query("Insert into category_table values(?,?,?)", [cat.cat_id, cat.cat_name, filename], callback);
    },
    deleteCategory: function (id, callback) {
        return db.query("delete from category_table where cat_id=?", [id], callback);
    },
    updateCategory: function (id, cat, callback) {
        return db.query("update category_table set cat_name=?,cat_image=? where cat_id=?", [cat.cat_name, cat.cat_image, id], callback);
    }
};
module.exports = category;