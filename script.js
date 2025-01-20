// importing modules 
const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');

const app = express(); // express app

//EJS as view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

prt = 3000;
app.listen(prt, () => {
    console.log(`Running on port ${prt}`);
})