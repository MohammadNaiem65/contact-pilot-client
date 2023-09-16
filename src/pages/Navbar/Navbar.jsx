import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserContext } from '../../../providers/UserContext/UserContext';

export default function Navbar() {
	// ! Required variables
	const { user, setUser } = useContext(UserContext);

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
			className='px-10 py-6 border-b-2 flex items-center justify-between'
			variants={containerVariant}
			initial='initial'
			animate='animate'>
			<motion.h1
				className='text-3xl font-semibold'
				variants={childVariant}>
				Contact Pilot
			</motion.h1>
			<div className='flex items-center gap-x-8 text-lg'>
				<motion.p variants={childVariant}>
					<Link to='/'>Home</Link>
				</motion.p>
				<motion.p variants={childVariant}>
					<Link to='/dashboard'>Dashboard</Link>
				</motion.p>
				<motion.p variants={childVariant}>
					<Link to='/add-contact'>Add Contact</Link>
				</motion.p>
			</div>
			{user ? (
				user.name
			) : (
				<motion.p
					className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold rounded'
					variants={childVariant}>
					<Link to='/login'>Login</Link>
				</motion.p>
			)}
		</motion.nav>
	);
}
