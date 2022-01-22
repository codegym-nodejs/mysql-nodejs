const express = require('express');
const route = express.Router();
const employeeController = require('../controller/employeeController');

route.post('/create', employeeController.createEmployee);
// Lấy thông tin employee với id cụ thể;
route.get('/:id');
// Trả về thông tin của tất cả employee trong bảng information\
route.get('/')
// update thông tin của employee dựa vào id của người đó
route.put('/update/:id')
// xóa thông tin của employee có id cụ thể
route.delete('/delete/:id')
module.exports = route;