const employeeModel = require('../model/employeeModel');

exports.createEmployee = function(req, res, next) {
  try{
    let infor = req.body;
    employeeModel.insertInfo(infor, function(err, result, fields){
      if(err) throw new Error(err);
      res.status(200).json({message: 'created employee'});
    })
  }catch(err) {
    console.error(err)
  }
}