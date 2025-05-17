const { validationResult } = require("express-validator")
const { user, student, role, student_user, role_user, major} = require("../models")
let self = {}

self.index = async (_, res)=> {
    const data = await student.findAll({
        attributes: ['id', 'firstname', 'lastname', 'classes', 'gender'],
        include: {
            model: major,
        }
    })
        res.status(200).json({
            message: "this end point for student data",
            data: data,
        })
    }

self.detail = async (req, res)=> {
    const id = req.param.id
    const data = await student.findAll({
        attributes: ['id', 'firstname', 'lastname', 'classes', 'gender'],
        include: {
            model: major,
        }
    })
        res.status(200).json({
            message: "this end point for student data",
            data: data,
        })
        res.send({
            message: "this end point for student detail",
        })
    }

    self.save = async (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }
    
        try {
            const {
                username,
                firstName,
                lastName,
                classes,
                gender,
                major_id
            } = req.body;
    
            student.create({
                firstName: firstName,
                lastName: lastName,
                classes: classes,
                major_id: major_id,
                gender: gender,
            })
    
            res.status(201).json({
                message: 'The student has been registered succesfully!',
                data: student
            })
    
        } catch (error) {
            res.status(500).send({
                message: 'Err',
                data: error
            })
        }
    
    
    }

    self.update = async (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }
    
        try {
            const id = req.params.id
            const data = await student.findByPk(id)
            const {
                firstName,
                lastName,
                classes,
                gender,
                major_id
            } = req.body;
    
            data.update({
                firstName: firstName,
                lastName: lastName,
                classes: classes,
                major_id: major_id,
                gender: gender,
            })
    
            res.send({
                message: 'update student success!',
                data: data
            })
        } catch (error) {
            res.status(500).send({
                message: 'Err',
                data: error
            })
        }
    }

    self.destroy = async (req, res) => {
        try {
            const id = req.params.id
            const data = await student.findByPk(id)
    
            data.destroy()
    
            res.send({
                message: 'delete student success!',
                data: data
            })
        } catch (error) {
            res.status(500).send({
                message: 'Err',
                data: error
            })
        }
    }
    

module.exports = self