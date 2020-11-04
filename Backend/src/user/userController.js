const userService = require('../user/userService')

const getAllClasses = async (req, res) => {
    const { data } = await userService.getAllClasses(req.pagination)
    res.send({
        status: 1,
        data
    })
}

const getStudentByClassId = async (req, res) => {
    const { id } = req.params
    const { data } = await userService.getStudentByClassId(id)
    res.send({
        status: 1,
        data
    })
}

const getStudent = async (req, res) => {
    const { id } = req.params
    const { data } = await userService.getStudent(id)
    res.send({
        status: 1,
        data
    })
}

module.exports = {
    getAllClasses,
    getStudent,
    getStudentByClassId
}