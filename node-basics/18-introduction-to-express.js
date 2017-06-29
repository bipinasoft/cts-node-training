const express = require('express');
const app = express();

function showHomePage(req, res) {
    res.send('Home Page');
}

function showContactPage(req, res) {
    res.send('Contact page');
}

function showAboutPage(req, res) {
    res.send('About Page');
}

app.get('/', showHomePage);

app.get('/contact', showContactPage);

app.get('/about', showAboutPage);

app.listen(3000);