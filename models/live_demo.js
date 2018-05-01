var db = require('../dbconnection');
var ldemo = {
  getdemo: function (id, callback) {
    return db.query("select p.*,l.*  from product_table p ,live_demo_table l where  l.fk_product_id=p.product_id and l.fk_email_id=?  ORDER BY live_demo_id DESC", [id], callback);
  },
  delete_demo: function (id, callback) {
    return db.query("delete from live_demo_table where live_demo_id=?", [id], callback);
  },
  getallDemo: function (callback) {
    return db.query("select * from live_demo_table", callback);
  },
  
  getDemoByStatus: function (status, callback) {
    db.query("select * from live_demo_table where live_demo_status=?", [status], callback);
  },

  alldelete: function (id, callback) {
    return db.query("delete from live_demo_table where fk_email_id=?", [id], callback)
  },
  addDemo: function (demo, callback) {
    return db.query("insert into live_demo_table values(?,?,?,?,?,?)", [demo.live_demo_id, demo.fk_email_id, demo.fk_product_id, demo.live_demo_date, demo.live_demo_address, demo.live_demo_status], callback);
  },
  updateDemo: function (id, demo, callback) {
    return db.query("update live_demo_table set live_demo_status=? where live_demo_id=?", [demo.live_demo_status, id], callback);
  }
};
module.exports = ldemo;
