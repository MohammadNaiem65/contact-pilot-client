import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MetaContext } from '../../providers/MetaContext/MetaContext';
import Contact from '../shared/Contact/Contact';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import notifyUser from '../../customHooks/notifyUser';
import UserUnavailable from '../shared/UserUnavailable/UserUnavailable';

export default function Dashboard() {
	// ! Required variables
	const { user } = useContext(MetaContext);
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
			<Helmet>
				<title>Dashboard || Contact Pilot</title>
			</Helmet>

			{user ? (
				<>
					<form className='w-1/3 mt-8 mx-auto flex items-center gap-x-5'>
						<input
							type='text'
							name='name'
							id='name'
							className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
							placeholder='Enter your query'
							required
						/>

						<input
							type='submit'
							value='Search'
							className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold border-2 border-transparent rounded hover:bg-transparent hover:border-white hover:text-white'
						/>
					</form>
					<h3 className='w-fit mx-auto mt-12 mb-7 px-5 text-2xl border-b-2'>
						Your Contacts
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
