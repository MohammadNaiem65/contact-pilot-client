import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MetaContext } from '../../../providers/MetaContext/MetaContext';
import ActiveLink from '../ActiveLink/ActiveLink';

export default function Navbar() {
	// ! Required variables
	const { user, setUser } = useContext(MetaContext);

	// ! Motion element variants
	const containerVariant = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
				when: 'beforeChildren',
				staggerChildren: 0.4,
			},
		},
	};

	const childVariant = {
		initial: {
			y: -200,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.nav
			className='px-10 py-6 border-b-2 text-lg flex items-center justify-between'
			variants={containerVariant}
			initial='initial'
			animate='animate'>
			<motion.h1
				className='text-3xl font-semibold'
				variants={childVariant}>
				Contact Pilot
			</motion.h1>
			<div className='flex items-center gap-x-8'>
				<motion.p variants={childVariant}>
					<ActiveLink to='/'>Home</ActiveLink>
				</motion.p>
				<motion.p variants={childVariant}>
					<ActiveLink to='/dashboard'>Dashboard</ActiveLink>
				</motion.p>
				<motion.p variants={childVariant}>
					<ActiveLink to='/add-contact'>Add Contact</ActiveLink>
				</motion.p>
			</div>
			{user ? (
				<div className='flex items-center gap-x-6'>
					<motion.p variants={childVariant}>
						{user.name.length > 10
							? user.name.slice(0, 8) + '...'
							: user.name}
					</motion.p>
					<motion.button
						className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold border-2 border-transparent rounded hover:bg-transparent hover:border-white hover:text-white'
						onClick={() => setUser(null)}
						variants={childVariant}>
						Log Out
					</motion.button>
				</div>
			) : (
				<motion.p
					className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold border-2 border-transparent rounded hover:bg-transparent hover:border-white hover:text-white'
					variants={childVariant}>
					<Link to='/login'>Login</Link>
				</motion.p>
			)}
		</motion.nav>
	);
}
