const express = require('express');
const app = express();
const url = require("url");

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index', {

    })
});

app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.listen(3000);