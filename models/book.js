const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	pageLength: Number,
	yearPublished: Number,
});

const Book = new mongoose.model('Book', bookSchema);
module.exports = Book;
