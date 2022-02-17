const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();

router.get('/news', newsController.getNews);
router.post('/news', newsController.addNews);
router.patch('/news/:id', newsController.editNews);
router.delete('/news/:id', newsController.deleteNews);

module.exports = router;