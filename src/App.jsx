import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/shared/Nav';

const App = () => {
	return (
		<>
			<div className='w-full min-h-screen'>
				<Nav />
				<Routes>
					<Route path='/' exact element={<Home />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
