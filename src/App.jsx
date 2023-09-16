import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';

function App() {
	// ! Required variables

	return (
		<HelmetProvider>
			<div className='w-full min-h-screen bg-slate-900 text-white'>
				<Navbar />
			</div>
		</HelmetProvider>
	);
}

export default App;
