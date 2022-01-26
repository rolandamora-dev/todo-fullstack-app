import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import TaskIcon from '@mui/icons-material/Task';
// import Link from '@mui/material/Link';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({ todoitem, handleDelete }) => {
	return (
		<div>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={`todo/${todoitem.id}`}>
					<ListItemIcon>
						<TaskIcon />
					</ListItemIcon>
					<ListItemText primary={todoitem.id} />
					<ListItemText primary={todoitem.todo} />
				</ListItemButton>
				<IconButton component={Link} to={`todo/${todoitem.id}`}>
					<EditIcon />
				</IconButton>
				<IconButton onClick={() => handleDelete(todoitem.id)}>
					<DeleteIcon />
				</IconButton>
			</ListItem>
		</div>
	);
};

export default TodoItem;
