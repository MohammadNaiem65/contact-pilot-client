import { useContext } from 'react';
import { MetaContext } from '../../providers/MetaContext/MetaContext';
import UserUnavailable from '../shared/UserUnavailable/UserUnavailable';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import notifyUser from '../../customHooks/notifyUser';
import { Helmet } from 'react-helmet-async';

export default function AddContact() {
	// ! Required variables
	const { user } = useContext(MetaContext);

	const handleAddContact = (e) => {
		e.preventDefault();
		const form = e.target;

		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;
		const userEmail = user.email;

		const contactData = { name, email, phone, userEmail };

		axiosCustomInstance
			.post('/api/contacts', contactData)
			.then((res) => {
				if (res.data.insertedId) {
					notifyUser('success', 'Added successfully!');
				} else {
					notifyUser('error', 'Something went wrong!');
				}
				form.reset();
			})
			.catch((err) => notifyUser('error', err.message));
	};
	return (
		<>
			<Helmet>
				<title>Add Contact || Contact Pilot</title>
			</Helmet>
			{user ? (
				<form
					className='w-[31rem] mt-24 mx-auto px-10 py-5 rounded'
					onSubmit={handleAddContact}>
					<h1 className='text-center text-3xl mb-10'>
						Add a Contact
					</h1>

					{/* Name */}
					<div className='w-full mt-4'>
						<label
							htmlFor='name'
							className='block mb-2 text-xl font-medium text-gray-300'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
							placeholder='Enter contact name'
							required
						/>
					</div>

					{/* Email */}
					<div className='w-full mt-4'>
						<label
							htmlFor='email'
							className='block mb-2 text-xl font-medium text-gray-300'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
							placeholder='Enter contact email'
							required
						/>
					</div>

					{/* Number */}
					<div className='w-full mt-4'>
						<label
							htmlFor='phone'
							className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
							Number:
						</label>
						<input
							type='text'
							id='phone'
							className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
							placeholder='Enter contact phone'
							required
						/>
					</div>

					{/* Submit */}
					<input
						type='submit'
						value='Submit'
						className='bg-gray-200 mt-5 mx-auto block px-5 py-2 border-2 font-semibold text-black text-lg rounded cursor-pointer hover:bg-transparent hover:text-white'
					/>
				</form>
			) : (
				<UserUnavailable />
			)}
		</>
	);
}
