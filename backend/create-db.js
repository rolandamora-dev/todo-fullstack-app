const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
const db = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
});

db.connect((err) => {
	if (err) throw err;
});

// Drop DB if exists
const dropDB = () => {
	let sql = 'DROP DATABASE IF EXISTS todoapp';
	db.query(sql, (err, result) => {
		if (err) throw err;
	});
	console.log('DB dropped...');
};

// Run to drop DB
dropDB();

// Create DB
const createDB = () => {
	let sql = 'CREATE DATABASE todoapp';
	db.query(sql, (err, result) => {
		if (err) throw err;
	});
	console.log('DB is created...');
};

// Run to create DB
createDB();

db.end((err) => {
	if (err) throw err;
});

// // create the connection to database
// const connection = mysql.createConnection({
// 	host: process.env.SQL_HOST,
// 	user: process.env.SQL_USER,
// 	password: process.env.SQL_PASSWORD,
// 	database: process.env.SQL_DB,
// });

// connection.connect((err) => {
// 	if (err) throw err;
// });

// // Create table
// const createTable = () => {
// 	let sql =
// 		'CREATE TABLE todos(id int AUTO_INCREMENT, todo VARCHAR(255), PRIMARY KEY(id))';
// 	connection.query(sql, (err, result) => {
// 		if (err) throw err;
// 		console.log('Table is created...');
// 	});
// };

// // Run to create table
// createTable();

// connection.end((err) => {
// 	if (err) throw err;
// });
