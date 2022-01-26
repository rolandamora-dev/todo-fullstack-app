const db = require('../config/db');

// @desc      List todos
// @route     GET /user
// @access    Public
exports.listTodos = async (req, res, next) => {
	let sql = 'SELECT * FROM todos';
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			success: true,
			data: result,
		});
	});
};

// @desc      Add todo
// @route     GET /user
// @access    Public
exports.addTodo = async (req, res, next) => {
	let todo = { todo: req.body.todo };
	let sql = 'INSERT INTO todos SET ?';
	db.query(sql, todo, (err, result) => {
		if (err) throw err;
		res.status(201).json({
			success: true,
			data: result,
		});
	});
};
