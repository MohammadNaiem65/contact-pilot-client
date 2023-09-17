import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MetaContext } from '../../providers/MetaContext/MetaContext';
import Contact from '../shared/Contact/Contact';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import notifyUser from '../../customHooks/notifyUser';
import UserUnavailable from '../shared/UserUnavailable/UserUnavailable';
import SortMenu from './SortMenu/SortMenu';
import DownloadContactsBtn from './DownloadContactsBtn/DownloadContactsBtn';

export default function Dashboard() {
	// ! Required variables
	const { user } = useContext(MetaContext);
	const [contacts, setContacts] = useState([]);
	const [sortBy, setSortBy] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			let data;
			if (!sortBy) {
				data = await axiosCustomInstance.get(
					`/api/contacts?email=${user?.email}`
				);
			} else if (sortBy === 'name') {
				data = await axiosCustomInstance.get(
					`/api/contacts/name?email=${user.email}`
				);
			} else if (sortBy === 'email') {
				data = await axiosCustomInstance.get(
					`/api/contacts/email?email=${user.email}`
				);
			} else if (sortBy === 'date') {
				data = await axiosCustomInstance.get(
					`/api/contacts/date?email=${user.email}`
				);
			}
			setContacts(data.data);
		};

		fetchData().catch((err) => notifyUser('error', err.message));
	}, [sortBy]);

	const handleFindContact = (e) => {
		e.preventDefault();

		axiosCustomInstance
			.get(`/api/contacts/contact?name=${e.target.name.value}`)
			.then((res) => setContacts([res.data]))
			.catch((err) => notifyUser('error', err.message));
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}>
			<Helmet>
				<title>Dashboard || Contact Pilot</title>
			</Helmet>

			{user ? (
				<>
					{/* Top input field */}
					<form
						className='w-1/3 mt-8 mx-auto flex items-center gap-x-5'
						onSubmit={handleFindContact}>
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
					{/* Header */}
					<div className='w-2/3 mx-auto mt-10 relative flex items-center'>
						<DownloadContactsBtn userEmail={user.email} />
						<h3 className='w-fit mx-auto mt-12 mb-7 px-5 text-2xl border-b-2'>
							Your Contacts
						</h3>
						<SortMenu setSortBy={setSortBy} />
					</div>
					{/* Contact table */}
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
