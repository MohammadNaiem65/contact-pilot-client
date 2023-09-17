import { useNavigate } from 'react-router-dom';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';
import notifyUser from '../../../customHooks/notifyUser';

export default function EditContactForm({ contactData, setModalDetails }) {
	// ! Required variables
	const navigate = useNavigate();
	const { _id, name, email, phone, userEmail } = contactData;

	const handleEditContact = (e) => {
		e.preventDefault();
		const form = e.target;

		const updatedName = form.name.value;
		const updatedEmail = form.email.value;
		const updatedPhone = form.phone.value;

		const updatedContactDetails = {
			name: updatedName,
			email: updatedEmail,
			phone: updatedPhone,
			userEmail,
		};

		axiosCustomInstance
			.put(`/api/contacts/${_id}`, updatedContactDetails)
			.then((res) => {
				if (res.data.matchedCount) {
					setModalDetails({
						showModal: false,
						modalData: {},
					});
					notifyUser('success', 'Updated successfully!');
					form.reset();
					navigate('/');
				} else {
					notifyUser('error', 'Internal server error!');
				}
			})
			.catch((err) => notifyUser('error', err.message));
	};

	return (
		<form
			className='w-[31rem] mx-auto px-10 py-5 rounded'
			onSubmit={handleEditContact}>
			<h1 className='text-center text-3xl mb-10'>Edit Contact</h1>

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
					defaultValue={name}
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
					defaultValue={email}
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
					defaultValue={phone}
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
	);
}
