import { motion } from 'framer-motion';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';
import notifyUser from '../../../customHooks/notifyUser';

export default function Contact({ contact, serial, setContacts }) {
	// ! Required variables
	const { _id, name, phone, email } = contact;

	const handleDelete = () => {
		axiosCustomInstance
			.delete(`/api/contacts/${_id}`)
			.then((res) => {
				if (res.data.deletedCount) {
					notifyUser('success', 'Deleted successfully!');
					setContacts((prev) =>
						prev.filter((cnt) => cnt._id !== _id)
					);
				}
			})
			.catch((err) => notifyUser('error', err.message));
	};

	return (
		<motion.div
			className='px-4 py-3 border-b-2 flex items-center justify-between last:border-b-0'
			initial={{ y: 100, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					delay: serial * 0.5,
				},
			}}>
			<p className='w-1/4 text-start'>
				<span className='mr-3'>{serial}.</span> {name}
			</p>
			<p className='w-1/4 text-start'>{phone}</p>
			<p className='w-1/3 text-start'>{email}</p>
			<p className='w-14 text-xl'>
				<button className='mr-2'>📝</button>
				<button onClick={handleDelete}>&times;</button>
			</p>
		</motion.div>
	);
}
