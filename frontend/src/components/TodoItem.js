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

const TodoItem = ({ todoitem }) => {
	return (
		<article className='todoitem'>
			{/* <Link to={`todo/${todoitem.id}`}>
				<Box sx={{ paddingTop: 1 }}>
					<Typography>
						<TaskIcon />
						{todoitem.todo}
					</Typography>
				</Box>
			</Link> */}

			{/* <Link href={`todo/${todoitem.id}`} underline='hover'>
				{todoitem.todo}
			</Link> */}

			<ListItem disablePadding>
				<ListItemButton component={Link} to={`todo/${todoitem.id}`}>
					<ListItemIcon>
						<TaskIcon />
					</ListItemIcon>
					<ListItemText primary={todoitem.todo} />
				</ListItemButton>
			</ListItem>
		</article>
	);
};

export default TodoItem;
