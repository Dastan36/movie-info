const mysql = require('../../lib/repository/baseRepository');
const uuid = require('uuid');

module.exports = {


  getClient: (obj) => {
    let sql = `select * from registeraccess where clientName = ?`;
    let values = [];
    values.push(obj.clientName);
    return mysql.query(sql, values);
  }
}