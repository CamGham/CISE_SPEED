const express = require('express');
const router = express.Router();

//load model
const Article = require('../../models/Article');


// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req,res) => res.send('article route testing!'));

// @route Get api/articles
// @description Get all articles
// @access Public
router.get('/', (req,res) => {
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No articles found'}));
});

// @route GET api/articles
// @description create article
// @access Public
router.post('/', (req, res) =>{
    Article.create(req.body)
    .then(article => res.json({msg: 'Article submitted successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add article'}));
});

module.exports = router;