const { validationResult } = require("express-validator")
const { comment, user } = require("../models")
const self = {}

self.list = async (_, res) => {
    let data = await comment.findAll({
        include: {
            model: user,
            attributes: ['username'],
        } 
    })
    res.status(200).json({ 
        message: 'Comment is found',
        data: data
    })
}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        content_comment_text,
    } = req.body

    await comment.create({
        content_text: content_comment_text,
        user_id: req.user.id,
        post_id: req.params.post_id
    })
    res.status(201).send({ message: 'Comment success' })
    }

module.exports = self