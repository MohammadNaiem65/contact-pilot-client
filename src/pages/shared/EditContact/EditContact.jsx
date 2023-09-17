import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MetaContext } from '../../../providers/MetaContext/MetaContext';

export default function EditContact() {
	const { modalDetails, setModalDetails } = useContext(MetaContext);

	return (
		<AnimatePresence>
			{modalDetails.showModal && (
				<motion.div
					className='w-full h-screen top-0 left-0 backdrop-blur-sm flex justify-center items-center fixed'
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.5, when: 'beforeChildren' },
					}}
					exit={{
						opacity: 0,
						transition: { duration: 0.6, when: 'afterChildren' },
					}}>
					<motion.div
						className='bg-gray-800 text-white h-[32rem] w-[32rem] rounded'
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{
							y: 100,
							opacity: 0,
							transition: { duration: 0.6 },
						}}>
						<p
							className='text-4xl text-end mr-3 cursor-pointer'
							onClick={() => {
								const newModalDetails = {
									...modalDetails,
									showModal: false,
								};
								setModalDetails(newModalDetails);
							}}>
							&times;
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
