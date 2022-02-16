import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Nav from './components/shared/Nav';

const App = () => {
	return (
		<>
			<div className='bg-third w-full min-h-screen'>
				<Nav />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/dashboard' exact element={<Dashboard />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
