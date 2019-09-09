const mysql = require('../../lib/repository/baseRepository');

module.exports = {
  get: function (obj) {
    let sql = `select * from user where name = ? and password = ?`;
    // let sql = `select * from user where name='admin' and password='1234567890'`;
    var values = [];
    values.push(obj.name);
    values.push(obj.password);
    return  mysql.query(sql,values);
  }
}