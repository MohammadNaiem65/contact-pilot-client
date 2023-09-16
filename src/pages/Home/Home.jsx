import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { motion } from 'framer-motion';
import UserAvailable from './UserAvailable/UserAvailable';
import UserUnavailable from './UserUnavailable/UserUnavailable';

export default function Home() {
	// ! Required variables
	const { user } = useContext(UserContext);
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0, transition: { delay: 2.5 } }}>
			{user ? <UserAvailable /> : <UserUnavailable />}
		</motion.div>
	);
}
