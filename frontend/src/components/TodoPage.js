import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';

const TodoPage = ({ todolists, handleEdit }) => {
	const { id } = useParams();
	const [editTodo, setEditTodo] = useState('');
	const todoitem = todolists.find((todoitem) => todoitem.id.toString() === id);
	return (
		<main>
			<Container maxWidth='sm'>
				<Box sx={{ paddingY: 5 }}>
					{todoitem && (
						<>
							<Box sx={{ paddingY: 5 }}>
								<Typography>Add to-do list</Typography>
								<form
									onSubmit={(event) => {
										event.preventDefault();
										handleEdit(id, editTodo);
									}}
								>
									<TextField
										id='standard-basic'
										label={todoitem.todo}
										variant='standard'
										onChange={(e) => setEditTodo(e.target.value)}
										sx={{ width: 450 }}
									/>
									<IconButton aria-label='add' type='submit'>
										<SaveIcon />
									</IconButton>
								</form>
							</Box>
						</>
					)}
					{!todoitem && (
						<>
							<Typography>Not found!</Typography>
							<p>
								<Link to='/'>Visit Our Homepage</Link>
							</p>
						</>
					)}
				</Box>
			</Container>
		</main>
	);
};

export default TodoPage;
