const express = require('express');

const router = express.Router();

// load model
const Article = require('../../models/Article');

// @route Get api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles/:filter
// @description retrieves articles by status field
// @access Public
router.get('/filter', async (req, res) => {
  Article.find(req.query)
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles/:status
// @description retrieves articles by status field
// @access Public
router.get('/bytitle', async (req, res) => {
  Article.find({ title: req.query.title })
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @update article, by passed ID
router.put('/:id', async (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: 'status updated succesfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update status' })
    );
});
 
// @route GET api/articles/pending
// @description retrieves articles where status field is pending
// @access Public
router.get('/pending', async (req, res) => {
  Article.find({ status: 'pending' })
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles
// @description create article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: 'Article submitted successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add article' }));
});

// @route GET api/articles/accepted
// @description retrieves articles where status field is accepted
// @access Public
router.get('/accepted', async (req, res) => {
  Article.find({ status: 'accepted' })
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles/:id
// @description retrieve the article by its id
// @access Public
router.get('/:id', async (req, res) => {
  Article.findById(req.params.id)
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles/:id
// @description update the article by its id
// @access Public
router.put('/:id', async (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

module.exports = router;
