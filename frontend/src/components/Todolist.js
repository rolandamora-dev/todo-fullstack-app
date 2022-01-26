import React from 'react';
import TodoItem from './TodoItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

const Todolist = ({ todolists }) => {
	return (
		<>
			<Box sx={{ paddingTop: 5 }}>
				<Typography>To-do lists:</Typography>
			</Box>
			<List>
				{todolists.map((todoitem) => (
					<TodoItem key={todoitem.id} todoitem={todoitem} />
				))}
			</List>
		</>
	);
};

export default Todolist;
