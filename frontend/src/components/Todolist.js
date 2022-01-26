import React from 'react';
import TodoItem from './TodoItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Todolist = ({ todolists }) => {
	return (
		<>
			<Box sx={{ paddingTop: 5 }}>
				<Typography>Todo lists:</Typography>
			</Box>
			{todolists.map((todoitem) => (
				<TodoItem key={todoitem.id} todoitem={todoitem} />
			))}
		</>
	);
};

export default Todolist;
