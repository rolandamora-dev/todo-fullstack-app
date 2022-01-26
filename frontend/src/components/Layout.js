import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Box from '@mui/material/Box';

const Layout = ({ search, setSearch }) => {
	return (
		<header>
			<Nav search={search} setSearch={setSearch} />
			<Outlet />
		</header>
	);
};

export default Layout;
