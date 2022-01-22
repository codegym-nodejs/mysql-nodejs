const db = require('../config/db.config');

module.exports = {
  insertInfo: function(value, callback) {
    return db.query(`INSERT INTO information SET ?`, value, callback);
  },
  getById: function(id, callback){
    return db.query(`select * from information where id=?`,[id], callback);
  }
}