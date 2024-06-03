const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(3000);
