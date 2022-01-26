const express = require('express');
const router = express.Router();
const { listTodos, addTodo } = require('../controllers/todo');

router.route('/').get(listTodos).post(addTodo);

module.exports = router;
