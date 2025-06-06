const { body } = require('express-validator')
const auth_ctrl = require('../controller/auth_ctrl')
const { user, major} = require("../models")
const bcryptjs = require('bcryptjs')
const { authenticateJWT } = require('../middleware/authMiddleware')

module.exports = (app) => {
    const router = app.Router()
    router.get('/me', authenticateJWT, async (req, res) => {
        res.status(200).json({
            message: 'token is valid',
            user: req.user
        });
    })

    router.post('/login', [
        body('username').isLength({ min: 6, max: 20}).isString().notEmpty().custom(async(value) => {
            let userNameCheck = await user.findOne({
                where: {
                    username: value
                },
                attributes: ['id'],
            })

            if(!!userNameCheck == false) {
                throw new Error('Username not registered!')
            }
        }),
        body('password').isLength({ min: 6, max: 100 }).isString().notEmpty()
    ], auth_ctrl.login)

    router.post('/register', [
        body('username').isLength({ min: 6, max: 20}).isString().notEmpty().custom(async (value) => {
            let userNameCheck = await user.findOne({
                where: {
                    username: value
                },
                attributes: ['id'],
            })

            if(userNameCheck) {
                throw new Error('Username has been registered!')
            }
        }),
        body('email').isEmail().notEmpty().custom(async (value) => {
            let emailCheck = await user.findOne({
                where: {
                    email: value
                },
                attributes: ['id'],
            })

            if(!!emailCheck) {
                throw new Error('Email has been registered!')
            }
        }).notEmpty(),
        body('password').isLength({ min: 6, max: 100 }).isString().notEmpty(),
        body('firstname').isString().notEmpty(),
        body('lastname').isString().notEmpty(),
        body('classes').isString().notEmpty().custom(async (value) => {
            const classValue = ["X", "XI", "XII"]
            const isValid = classValue.includes(value)
        
                console.log(`IS VALID: ${isValid}`)
        
                if (!isValid) {
                    throw new Error('Classes is not registered!')
                }
            }),
        body('gender').isString().notEmpty().custom(async (value) => {
            const genderVal = ["M", "F"]
            const isValid = await genderVal.includes(value)
                if (!isValid) {
                    throw new Error('Gender is not registered!')
                }
            }),
        body('major_id').isString().notEmpty().custom(async (value) => {
            const majorValue = await major.findByPk(value)
                if (!!majorValue == false) {
                    throw new Error('Major is not registered!')
                }
            })
    ],auth_ctrl.save)

    return router
}