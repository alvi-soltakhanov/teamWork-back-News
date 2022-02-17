const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller');

const router = Router();

router.get('/news/category', categoriesController.getCategory);
router.post('/news/category', categoriesController.addCategory);
router.patch('/news/category/:id', categoriesController.editCategory);
router.delete('/news/category/:id', categoriesController.deleteCategory);

module.exports = router;