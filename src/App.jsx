import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/shared/Navbar/Navbar';

function App() {
	// ! Required variables

	return (
		<HelmetProvider>
			<div className='w-full min-h-screen bg-slate-900 text-white'>
				<Navbar />
				<Outlet />
			</div>
		</HelmetProvider>
	);
}

export default App;
