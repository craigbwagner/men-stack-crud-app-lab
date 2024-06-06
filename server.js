const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
	console.log(`connected to mongodb ${mongoose.connection.name}`);
});
const Book = require('./models/book');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.get('/', async (req, res) => {
	const allBooks = await Book.find();
	res.render('index.ejs', { books: allBooks });
});

app.get('/books/new', (req, res) => {
	res.render('books/new.ejs');
});

app.get('/books/:bookId', async (req, res) => {
	const foundBook = await Book.findById(req.params.bookId);
	res.render('books/show.ejs', {
				book: foundBook,
	});
});

app.get('/books/:bookId/edit', async (req, res) => {
	const foundBook = await Book.findById(req.params.bookId);
	res.render('books/edit.ejs', { book: foundBook });
});

app.post('/books', async (req, res) => {
	console.log(req.body.publicationYear);
	await Book.create(req.body);
	res.redirect('/');
});

app.listen(3000);
