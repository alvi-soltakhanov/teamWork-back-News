const Category = require('../models/Category.model');

module.exports.categoriesController = {
    getCategory: async (req, res) => {
        try {
            const getCategory = await Category.find();
            res.json(getCategory);
        } catch (e) {
            res.json(e);
        }
    },
    addCategory: async (req, res) => {
        try {
            await Category.create({
                name: req.body.name}
                );
            res.json('Категория добавлена');
        } catch (e) {
            res.json(e);
        }
    },
    editCategory: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id);
            res.json('Категория изменена');
        } catch (e) {
            res.json(e);
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id);
            res.json('Категория удалена');
        } catch (e) {
            res.json(e);
        }
    }
}