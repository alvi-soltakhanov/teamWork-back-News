const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');

const router = Router();

router.get('/news/comments', commentsController.getComment);
router.post('/news/comments', commentsController.addComment);
router.patch('/news/comments/:id', commentsController.editComment);
router.delete('/news/comments/:id', commentsController.deleteComment);

module.exports = router;