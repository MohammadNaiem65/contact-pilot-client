import { motion } from 'framer-motion';

export default function SignUp() {
	return (
		<motion.form
			className='w-[31rem] mt-16 mx-auto px-10 py-5 border-2 flex flex-col items-center rounded'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.5 } }}>
			<h1 className='text-center text-3xl mb-10'>Sign Up</h1>

			{/* Name */}
			<div className='w-full'>
				<label
					htmlFor='confirm_password'
					className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
					Name:
				</label>
				<input
					type='text'
					id='confirm_password'
					className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
					placeholder='Enter your name'
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
					placeholder='Enter your email'
					required
				/>
			</div>
			{/* Password */}
			<div className='w-full mt-4'>
				<label
					htmlFor='password'
					className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
					Password:
				</label>
				<input
					type='password'
					id='password'
					className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
					placeholder='Enter your password'
					required
				/>
			</div>
			{/* Confirm password */}
			<div className='w-full mt-4'>
				<label
					htmlFor='confirm_password'
					className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
					Confirm Password:
				</label>
				<input
					type='password'
					id='confirm_password'
					className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
					placeholder='Confirm your password'
					required
				/>
			</div>
			{/* Confirm */}
			<input
				type='submit'
				value='Submit'
				className='bg-gray-200 mt-5 px-5 py-2 border-2 font-semibold text-black text-lg rounded cursor-pointer hover:bg-transparent hover:text-white'
			/>
		</motion.form>
	);
}
