const Comment = require('../models/Comment.model');

module.exports.commentsController = {
    getComment: async (req, res) => {
        try {
            const getComment = await Comment.find().populate("newsId")
            res.json(getComment);
        } catch (e) {
            res.json(e);
        }
    },
    addComment: async (req, res) => {
        const { text, newsId} = req.body;
        try {
            await Comment.create({
                text,
                newsId
            });
            res.json('Комментарий добавлен');
        } catch (e) {
            res.json(e);
        }
    },
    editComment: async (req, res) => {
        try {
            await Comment.findByIdAndUpdate(req.params.id);
            res.json('Комментарий изменен');
        } catch (e) {
            res.json(e);
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndDelete(req.params.id);
            res.json('Комментарий удален');
        } catch (e) {
            res.json(e);
        }
    }
}