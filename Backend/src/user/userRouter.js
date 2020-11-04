const R = require('express').Router();
const userController = require('../user/userController')

const { tryCatch } = require('../middlewares/errorHandle')

R.get('/', tryCatch(userController.getAllClasses))

R.get('/:classId', tryCatch(userController.getStudentByClassId))

R.get('/studentId', tryCatch(userController.getStudent))

module.exports = R