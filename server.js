const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/books/new', (req, res) => {
	res.render('books/new.ejs');
});

app.post('/books', async (req, res) => {
	await Fruit.create(req.body);
});

app.listen(3000);
