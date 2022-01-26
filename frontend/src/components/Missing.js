import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Missing = () => {
	return (
		<div>
			<Typography>Not found!</Typography>
			<p>
				<Link to='/'>Visit Our Homepage</Link>
			</p>
		</div>
	);
};

export default Missing;
