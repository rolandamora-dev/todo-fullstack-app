const mysql = require('mysql2');
require('dotenv').config();

const connectDB = () => {
	// create the connection to database
	const db = mysql.createConnection({
		host: process.env.SQL_HOST,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
	});

	db.connect((err) => {
		if (err) throw err;
	});

	return db;
};

module.exports = connectDB;
