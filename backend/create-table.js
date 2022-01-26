const mysql = require('mysql2');
require('dotenv').config();

// create the db to database
const db = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DB,
});

db.connect((err) => {
	if (err) throw err;
});

// Drop Table if exists
const dropTable = () => {
	let sql = 'DROP TABLE IF EXISTS todos';
	db.query(sql, (err, result) => {
		if (err) throw err;
	});
	console.log('Table dropped...');
};

// Run to drop Table
dropTable();

// Create table
const createTable = () => {
	let sql =
		'CREATE TABLE todoapp.todos(id int AUTO_INCREMENT, todo VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log('Table is created...');
	});
};

// Run to create table
createTable();

db.end((err) => {
	if (err) throw err;
});
