import { useContext, useEffect, useState } from 'react';
import { MetaContext } from '../../../providers/MetaContext/MetaContext';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';
import notifyUser from '../../../customHooks/notifyUser';
import Contact from '../../shared/Contact/Contact';

export default function UserAvailable() {
	// ! Required variables
	const { user } = useContext(MetaContext);
	const [recentContacts, setRecentContacts] = useState([]);

	useEffect(() => {
		const unsubscribe = () => {
			axiosCustomInstance
				.get(`/api/contacts/10?email=${user.email}`)
				.then((res) => setRecentContacts(res.data))
				.catch((err) => notifyUser('error', err.message));
		};

		return () => {
			return unsubscribe();
		};
	}, []);

	return (
		<div>
			<h1 className='text-center text-3xl mt-12'>
				Welcome Back {user?.name} 👋
			</h1>
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
				{recentContacts.map((contact, index) => (
					<Contact
						key={index}
						contact={contact}
						serial={index + 1}
						setContacts={setRecentContacts}
					/>
				))}
			</div>
		</div>
	);
}
