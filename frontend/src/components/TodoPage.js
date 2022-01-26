import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const TodoPage = ({ todolists, handleDelete }) => {
	const { id } = useParams();
	const todoitem = todolists.find((todoitem) => todoitem.id.toString() === id);
	return (
		// <main className='TodoPage'>
		// 	<article className='todoitem'>
		// 		{todoitem && (
		// 			<>
		// 				<h2>{todoitem.title}</h2>
		// 				<p className='postDate'>{todoitem.datetime}</p>
		// 				<p className='postBody'>{todoitem.body}</p>
		// 				<button onClick={() => handleDelete(todoitem.id)}>Delete todoitem</button>
		// 			</>
		// 		)}
		// 		{!todoitem && (
		// 			<>
		// 				<h2>todoitem Not Found</h2>
		// 				<p>Well, that's disappointing.</p>
		// 				<p>
		// 					<Link to='/'>Visit Our Homepage</Link>
		// 				</p>
		// 			</>
		// 		)}
		// 	</article>
		// </main>
		<main>
			<article>
				{todoitem && (
					<>
						<h2>{todoitem.todo}</h2>
						{/* <button onClick={() => handleDelete(todoitem.id)}>
							Delete Todo
						</button> */}
						<IconButton
							aria-label='delete'
							type='submit'
							onClick={() => handleDelete(todoitem.id)}
						>
							<DeleteIcon />
						</IconButton>
					</>
				)}
				{!todoitem && (
					<>
						<h2>Not found!</h2>
						<p>
							<Link to='/'>Visit Our Homepage</Link>
						</p>
					</>
				)}
			</article>
		</main>
	);
};

export default TodoPage;
