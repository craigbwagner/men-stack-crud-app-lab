const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: String,
	pageCount: Number,
	publicationYear: Number,
});

const Book = new mongoose.model('Book', bookSchema);
module.exports = Book;
