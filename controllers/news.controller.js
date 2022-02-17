const News = require('../models/News.model');

module.exports.newsController = {
    getNews: async (req, res) => {
        try {
            const getNews = await News.find().populate('categoryId')
            res.json(getNews);
        } catch (e) {
            res.json(e);
        }
    },
    addNews: async (req, res) => {
        const {title, image, text, categoryId} = req.body
        try {
            await News.create({
                title,
                text,
                categoryId,
                image
            });
            res.json('Новость добавлена');
        } catch (e) {
            res.json(e);
        }
    },
    editNews: async (req, res) => {
        try {
            await News.findByIdAndUpdate(req.params.id);
            res.json('Новость изменена');
        } catch (e) {
            res.json(e);
        }
    },
    deleteNews: async (req, res) => {
        try {
            await News.findOneAndDelete(req.params.id);
            res.json('Новость удалена');
        } catch (e) {
            res.json(e);
        }
    }
}