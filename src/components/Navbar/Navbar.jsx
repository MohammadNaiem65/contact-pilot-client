import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='px-10 py-6 border-b-2 flex items-center justify-between'>
			<h1 className='text-3xl font-semibold'>Contact Pilot</h1>
			<div className='flex items-center gap-x-8 text-lg'>
				<Link to='/'>Home</Link>
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/add-contact'>Add Contact</Link>
			</div>
			<button>Log Out</button>
		</nav>
	);
}
