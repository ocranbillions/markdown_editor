const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/articles.routes');
const Article = require('./models/articles.model')

// const server = express();
mongoose.connect('mongodb://localhost/markdown_blog', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const server = express();
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: false }))


server.use('/articles', routes)


server.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test description'
        }
    ]
    res.render('articles/index', { articles: articles });
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on PORT ${port}`));