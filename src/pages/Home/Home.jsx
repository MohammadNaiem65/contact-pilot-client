import { useContext } from 'react';
import { MetaContext } from '../../providers/MetaContext/MetaContext';
import { motion } from 'framer-motion';
import UserAvailable from './UserAvailable/UserAvailable';
import UserUnavailable from '../shared/UserUnavailable/UserUnavailable';
import { Helmet } from 'react-helmet-async';

export default function Home() {
	// ! Required variables
	const { user } = useContext(MetaContext);
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}>
			<Helmet>
				<title>Home || Contact Pilot</title>
			</Helmet>
			{user ? <UserAvailable /> : <UserUnavailable />}
		</motion.div>
	);
}
