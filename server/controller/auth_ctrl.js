const { validationResult } = require("express-validator")
const { user, student, role, student_user, role_user, major} = require("../models")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
let self = {}

self.login = async (req, res)=> {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        username,
        password
    } = req.body

    const userData = await user.findOne({
        include: [
            { model: role },
            { model: student }
        ],
        where : {
            username: username
        },
        attributes: ["id", "username", "email", "password"]
    })

    let isCorrectPass = await bcryptjs.compare(password, userData.password)

    if(!isCorrectPass) {
        return res.status(401).json({
            message: "Invalid Password!",
            user: userData
        })
    }

    const secret = "XI_PPLG_1_AUREL"
    const options = {
        expiresIn: '24h'
    }
    
    const token = jwt.sign({
        data: {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            firstName: userData.students[0].firstName,
            lastName: userData.students[0].lastName,
            classes: userData.students[0].classes,
            gender: userData.students[0].gender,
            role: userData.roles[0].role
        }
    }, secret, options)

    res.status(200).json({
        message: "Login Successfully!",
        data: token
    })
}

self.save = async (req, res)=> {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        username,
        email,
        password,
        firstName,
        lastName,
        classes,
        major_id,
        gender
    } = req.body

    const hashedPassword = await bcryptjs.hash(password, 10)
    const userData = await user.create({
        username: username,
        email: email,
        password: hashedPassword
    })

    const studentData = await student.create({
        firstName: firstName,
        lastName: lastName,
        classes: classes,
        major_id: major_id,
        gender: gender
    })

    const roleStudent = await role.findOne({
        attributes : ["id"],
        where : {
            name: "Student"
        }
    })

    await role_user.create({
        user_id: userData.id,
        role_id: roleStudent.id
    })

    await student_user.create({
        user_id: userData.id,
        student_id: studentData.id
    })

        res.send({
            message: "Register Successfully",
        })
    }

module.exports = self