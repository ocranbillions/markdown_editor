const express = require('express');
const Article = require('./../models/articles.model')
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()});
})

router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if(article == null) {
            res.redirect('/')
        }
        
        console.log(article, 'article8828348734973947897797979797')
        res.render('articles/show', { article });
    } catch (error) {
        console.log(error, 'cant find');
    }
})

router.post('/', async (req, res) => {
    // res.render('articles/new_article');
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`)

    } catch (error) {
        console.log(error);  
        res.render('articles/new', { article })
    }
})


module.exports = router;