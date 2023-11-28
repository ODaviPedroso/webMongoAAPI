const Article = require('../models/article');

exports.createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(201).json(newArticle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar o Artigo.' });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const Articles = await Article.find();
    res.status(200).json(Articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar os Artigos.' });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const Article = await Article.findById(req.params.id);
    if (!Article) {
      return res.status(404).json({ error: 'Artigo não encontrado.' });
    }
    res.status(200).json(Article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar o Artigo.' });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ error: 'Artigo não encontrado.' });
    }
    res.status(200).json(updatedArticle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar o Artigo.' });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ error: 'Artigo não encontrado.' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir o Artigo.' });
  }
};

exports.likeArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ error: 'Artigo não encontrado.' });
    }
    article.kb_liked_count += 1;
    await article.save();

    res.status(200).json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao dar like no Artigo.' });
  }
};

exports.dislikeArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ error: 'Artigo não encontrado.' });
    }

    article.kb_disliked_count += 1;
    await article.save();

    res.status(200).json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao dar dislike no Artigo.' });
  }
};
