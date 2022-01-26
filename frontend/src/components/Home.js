import React from 'react';
import Todolist from './Todolist';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = ({ todolists, handleDelete }) => {
	return (
		<main>
			<Container maxWidth='sm'>
				{todolists.length ? (
					<Todolist todolists={todolists} handleDelete={handleDelete} />
				) : (
					<Box sx={{ paddingY: 5 }}>
						<Typography>No to-do lists to display.</Typography>
					</Box>
				)}
			</Container>
		</main>
	);
};

export default Home;
