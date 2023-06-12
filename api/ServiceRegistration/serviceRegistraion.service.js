const mysql = require("mysql");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "handyman_app",
});

module.exports = {
  insertServiceReg: (data, callback) => {
    pool.query(
      `INSERT INTO service_reg 
      (user_id, serv_nameSlno, serv_type, requment_type, subcrpn_type, location, booking_date)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.serv_nameSlno,
        data.serv_type,
        data.requment_type,
        data.subcrpn_type,
        data.location,
        data.booking_date,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  serviceUpdation: (data, callback) => {
    pool.query(
      `UPDATE service_reg SET 
      user_id = ?, serv_nameSlno = ?, serv_type = ?, requment_type = ?, subcrpn_type = ?, location = ?, booking_date = ?
      WHERE reg_slno = ?`,
      [
        data.user_id,
        data.serv_nameSlno,
        data.serv_type,
        data.requment_type,
        data.subcrpn_type,
        data.location,
        data.booking_date,
        data.reg_slno,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  ServiceRegistartionselect: (callback) => {
    pool.query(
      `SELECT 
      sr.user_id, 
      uc.user_name,
      sr.serv_nameSlno,
      sn.serv_name,
      sr.serv_type,
      sr.requment_type,
      sr.subcrpn_type,
      sr.location,
      sr.booking_date 
    FROM 
      service_reg AS sr
      LEFT JOIN services AS s1 ON sr.serv_type = s1.serv_slno
      LEFT JOIN user_creation AS uc ON sr.user_id = uc.id 
      LEFT JOIN service_name AS sn ON sr.serv_nameSlno = sn.name_slno`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
