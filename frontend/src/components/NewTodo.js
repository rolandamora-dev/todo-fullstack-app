import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

const NewTodo = ({ handleSubmit, todo, setTodo }) => {
	// const submitHandle = (event) => {
	// 	event.preventDefault();
	// 	confirm;
	// };

	return (
		// <main className='NewPost'>
		// 	<h2>New Todo</h2>
		// 	<form className='newPostForm' onSubmit={handleSubmit}>
		// 		<label htmlFor='todo'>Todo:</label>
		// 		<input
		// 			id='todo'
		// 			type='text'
		// 			required
		// 			value={todo}
		// 			onChange={(e) => setTodo(e.target.value)}
		// 		/>
		// 		<button type='submit'>Submit</button>
		// 	</form>
		// </main>
		<main>
			<Container maxWidth='sm'>
				<Box sx={{ paddingY: 5 }}>
					<Typography>Add new Todo list</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							id='standard-basic'
							label='Standard'
							variant='standard'
							onChange={(e) => setTodo(e.target.value)}
						/>
						{/* <button type='submit'>Submit</button> */}
						<IconButton aria-label='add' type='submit'>
							<AddCircleIcon />
						</IconButton>
					</form>
				</Box>
			</Container>
		</main>
	);
};

export default NewTodo;
