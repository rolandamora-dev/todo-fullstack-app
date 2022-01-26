import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import NewTodo from './components/NewTodo';
import TodoPage from './components/TodoPage';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function App() {
	const [todolists, setTodolists] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [todo, setTodo] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTodos = async () => {
			const { data } = await axios.get('/api/todos');
			setTodolists(data.data);
		};

		fetchTodos();
	}, []);

	useEffect(() => {
		const filteredResults = todolists.filter((todoitem) =>
			todoitem.todo.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResults(filteredResults.reverse());
	}, [todolists, search]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = todolists.length ? todolists[todolists.length - 1].id + 1 : 1;
		const newTodo = { id, todo: todo };
		const allPosts = [...todolists, newTodo];
		try {
			await axios.post('/api/todos', { todo: todo });
		} catch (err) {
			console.log(err);
		}
		setTodolists(allPosts);
		setTodo('');
		navigate('/');
	};

	const handleDelete = async (id) => {
		const postTodolist = todolists.filter((todoitem) => todoitem.id !== id);
		setTodolists(postTodolist);
		try {
			await axios.delete(`/api/todos/${id}`);
		} catch (err) {
			console.log(err);
		}
		navigate('/');
	};

	return (
		<Container maxWidth='sm'>
			<Paper elevation={24} sx={{ minHeight: 700 }}>
				<Routes>
					<Route
						path='/'
						element={<Layout search={search} setSearch={setSearch} />}
					>
						<Route index element={<Home todolists={searchResults} />} />
						<Route path='todo'>
							<Route
								index
								element={
									<NewTodo
										handleSubmit={handleSubmit}
										todo={todo}
										setTodo={setTodo}
									/>
								}
							/>
							<Route
								path=':id'
								element={
									<TodoPage todolists={todolists} handleDelete={handleDelete} />
								}
							/>
						</Route>
					</Route>
				</Routes>
			</Paper>
		</Container>
	);
}

export default App;
