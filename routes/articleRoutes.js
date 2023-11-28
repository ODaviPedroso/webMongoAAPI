const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/', articleController.createArticle);
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);
router.post('/:id/like', articleController.likeArticle);
router.post('/:id/dislike', articleController.dislikeArticle);

module.exports = router;
