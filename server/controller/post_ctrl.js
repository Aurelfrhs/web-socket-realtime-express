const { validationResult } = require("express-validator")
const { post, user } = require("../models")
const comment = require("../models/comment")
const self = {}

self.list = async (_, res) => {
    let data = await post.findAll({
        include: [
        {
            model: user,
            attributes: ['username'],
        },
        {
            model: comment,
            attributes: ['content_text'],
            include: {
                model: user,
                attributes: ['username'],
            }
        }
    ],
    })
    res.status(200).json({ 
        message: 'Post is found',
        data: data
    })
}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        content_text,
    } = req.body

    const data = await post.create({
        content_text: content_text,
        private: "FALSE",
        user_id: req.user.id
    })
    res.status(201).send({ message: 'Posting successfully', data: data })
    }

module.exports = self