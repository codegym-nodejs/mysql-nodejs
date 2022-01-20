const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'cgo'
})

connection.connect(err => {
  if (err) {
    console.error(err);
  }
  console.log('Database Connected!');
  let createEmployeeDB = `create database if not exists employee`;
  let createEmpInfo = `create table if not exists information(
    id int primary key auto_increment,
    name varchar(255)not null,
    age int not null,
    address varchar(255)
  )`;
  connection.query(createEmpInfo, (err, result, fields) => {
    if (err) throw new Error(err);
    console.log('table successfully created');
  });
});

module.exports = connection;