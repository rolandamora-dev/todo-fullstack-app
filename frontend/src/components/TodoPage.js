import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const TodoPage = ({ todolists, handleDelete }) => {
	const { id } = useParams();
	const todoitem = todolists.find((todoitem) => todoitem.id.toString() === id);
	return (
		<main>
			<Container maxWidth='sm'>
				<Box sx={{ paddingY: 5 }}>
					{todoitem && (
						<>
							<Typography>{todoitem.todo}</Typography>
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
