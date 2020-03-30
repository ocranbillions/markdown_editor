const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/articles.routes');
const methodOverride = require('method-override');
const Article = require('./models/articles.model');

mongoose.connect('mongodb://localhost/markdown_blog', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const server = express();
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride('_method'));


server.use('/articles', routes)


server.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on PORT ${port}`));