const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '/../public');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

//ROUTES
app.get('/products', (req, res) => {
    res.render('ProductDetail', {
        title: 'Product Detail',
    });
});

app.get('/home', (req, res) => {
    res.render('MenuPage');
});

app.get('/login', (req, res) => {
    res.render('Login');
});

app.get('/profile', (req, res) => {
    res.render('Profile');
});

app.get('/signup', (req, res) => {
    res.render('Signup');
});

app.get('/addItem', (req, res) => {
    res.render('SellItemPage');
});
//END ROUTES

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});