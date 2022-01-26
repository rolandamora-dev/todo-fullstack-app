import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';

const NewTodo = ({ handleSubmit, todo, setTodo }) => {
	return (
		<main>
			<Container maxWidth='sm'>
				<Box sx={{ paddingY: 5 }}>
					<Typography>Add to-do list</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							id='standard-basic'
							label='todo'
							variant='standard'
							onChange={(e) => setTodo(e.target.value)}
							sx={{ width: 450 }}
						/>
						<IconButton aria-label='add' type='submit'>
							<SaveIcon />
						</IconButton>
					</form>
				</Box>
			</Container>
		</main>
	);
};

export default NewTodo;
