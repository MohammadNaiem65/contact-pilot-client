import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { motion } from 'framer-motion';
import Contact from '../shared/Contact/Contact';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import notifyUser from '../../customHooks/notifyUser';
import UserUnavailable from '../shared/UserUnavailable/UserUnavailable';

export default function Dashboard() {
	// ! Required variables
	const { user } = useContext(UserContext);
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const unsubscribe = () => {
			axiosCustomInstance
				.get(`/api/contacts?email=${user?.email}`)
				.then((res) => setContacts(res.data))
				.catch((err) => notifyUser('error', err.message));
		};

		return () => {
			return unsubscribe();
		};
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}>
			{user ? (
				<>
					<h3 className='w-fit mx-auto mt-12 mb-7 px-5 text-2xl border-b-2'>
						Your recent contacts
					</h3>
					<div className='w-3/4 mx-auto px-10'>
						<div className='px-4 border-b-2 flex justify-between items-center'>
							<p className='w-1/4 text-start'>Name</p>
							<p className='w-1/4 text-start'>Phone</p>
							<p className='w-1/3 text-start'>Email</p>
							<p className='w-14'></p>
						</div>
						{contacts.map((contact, index) => (
							<Contact
								key={index}
								contact={contact}
								serial={index + 1}
								setContacts={setContacts}
							/>
						))}
					</div>
				</>
			) : (
				<UserUnavailable />
			)}
		</motion.div>
	);
}
