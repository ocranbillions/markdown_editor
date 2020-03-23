// import express from 'express';

const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on PORT ${port}`));