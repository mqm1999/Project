const db = require('../utils/db');
const security = require('../utils/security')

const getAllClasses = async () => {
    const sql = `select * from Class`;
    const data = await db.queryMulti(sql)
    return {
        data
    }
}

const getStudentByClassId = async (id) => {
    const sql = `select 
    Id, Fullname, Gender, Age 
    from Student
    where 
    classId = ?`
    const data = await db.queryMulti(sql)
    return {
        data
    }
}

const getStudent = async (id) => {
    const sql = `select * 
    from Student
    where 
    studentId = ?`
    const data = await db.queryOne(sql)
    return {
        data
    }
}

module.exports = {
    getAllClasses,
    getStudent,
    getStudentByClassId
}