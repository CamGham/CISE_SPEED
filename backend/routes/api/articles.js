const express = require('express');
const router = express.Router();

//load model
const subArticle = require('../../models/subArticle');

//create article
// @route GET api/articles
router.post('/', (req, res) =>{
    subArticle.create(req.Body)
    .then(subarticle => res.json({msg: 'Article submitted successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add article'}));
})

module.exports = router;