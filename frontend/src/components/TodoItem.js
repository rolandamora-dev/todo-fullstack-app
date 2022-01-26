import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ todoitem }) => {
	return (
		<article className='todoitem'>
			<Link to={`todo/${todoitem.id}`}>
				<h2>{todoitem.todo}</h2>
			</Link>
		</article>
	);
};

export default TodoItem;
