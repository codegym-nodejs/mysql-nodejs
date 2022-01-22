const express = require('express');
const route = express.Router();
const employeeController = require('../controller/employeeController');

route.post('/create', employeeController.createEmployee);
// Lấy thông tin employee với id cụ thể;
route.get('/:id', employeeController.getEmployeeById);
// Trả về thông tin của tất cả employee trong bảng information\
route.get('/', employeeController.getAllEmployees);
// update thông tin của employee dựa vào id của người đó
route.put('/update/:id')
    // xóa thông tin của employee có id cụ thể
route.delete('/delete/:id')
module.exports = route;