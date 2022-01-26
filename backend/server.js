const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to database
const db = connectDB();

app.get('/', (req, res) => {
	res.end('API is running');
});

app.get('/api/todos', (req, res) => {
	let sql = 'SELECT * FROM todos';
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			success: true,
			data: result,
		});
	});
});

app.get('/api/todos/:id', (req, res) => {
	let sql = `SELECT * FROM todos WHERE id=${req.params.id}`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			success: true,
			data: result,
		});
	});
});

app.delete('/api/todos/:id', (req, res) => {
	let sql = `DELETE FROM todos WHERE id=${req.params.id}`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			success: true,
			data: result,
		});
	});
});

app.put('/api/todos/:id', (req, res) => {
	let sql = `UPDATE todoapp.todos SET todo='${req.body.todo}' WHERE id=${req.params.id}`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			success: true,
			data: result,
		});
	});
});

app.post('/api/todos', (req, res) => {
	let todo = { todo: req.body.todo };
	let sql = 'INSERT INTO todos SET ?';
	db.query(sql, todo, (err, result) => {
		if (err) throw err;
		res.status(201).json({
			success: true,
			data: result,
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
