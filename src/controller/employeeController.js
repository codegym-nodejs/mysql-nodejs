const employeeModel = require('../model/employeeModel');

exports.createEmployee = function(req, res, next) {
    try {
        let infor = req.body;
        employeeModel.insertInfo(infor, function(err, result, fields) {
            if (err) throw new Error(err);
            res.status(200).json({ message: 'created employee' });
        })
    } catch (err) {
        console.error(err)
    }
}

exports.getEmployeeById = function(req, res) {
    try {
        let id = req.params.id;
        employeeModel.getById(id, function(err, result, fields) {
            if (err) throw new Error(err);
            res.status(200).json(result);
        })
    } catch (err) {
        console.log('Error')
    }
}

exports.getAllEmployees = function(req, res) {
    try {
        employeeModel.getAll(function(err, result) {
            if (err) throw new Error(err);
            res.status(200).json(result);
        })
    } catch (error) {
        console.log('error');
    }
}