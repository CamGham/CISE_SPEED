const express = require('express');

const router = express.Router();

// load model
const Article = require('../../models/Article');
// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

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

router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: 'No articles found' })
    );
});

// @route GET api/articles/:status
// @description retrieves articles by status field
// @access Public
router.get('/:semethod', async (req, res) => {
  const artStatus = req.params;

  console.log(artStatus);
  const data = await Article.find({ semethod: artStatus.semethod });
  res.json(data);
});

// @route GET api/articles/:status
// @description update status field in database by passing in the correct article ID
// @access Public
router.put('/', (req, res) => {
  const articleId = getID(req.params.id)
  const updatedStatus = getStatus(req.params.status)
  Article.status = updatedStatus
  res.send('Status Updated')
 })

// @route GET api/articles
// @description create article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: 'Article submitted successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add article' }));
});

module.exports = router;
