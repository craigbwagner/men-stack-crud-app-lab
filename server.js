const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
	console.log(`connected to mongodb ${mongoose.connection.name}`);
});
const Book = require('./models/book');

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/books/new', (req, res) => {
	res.render('books/new.ejs');
});

app.post('/books', async (req, res) => {
	await Book.create(req.body);
	res.redirect('/');
});

app.listen(3000);
