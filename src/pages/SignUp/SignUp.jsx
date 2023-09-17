import { Link } from 'react-router-dom';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import notifyUser from '../../customHooks/notifyUser';
import { Helmet } from 'react-helmet-async';

export default function SignUp() {
	// ! Handle Sign up
	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;

		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirm_password.value;

		const userData = { name, email, password };

		if (password.length < 6) {
			notifyUser('error', 'Password length must contain 6 character!');
		} else if (password !== confirmPassword) {
			notifyUser('error', "Password didn't matched!");
		} else {
			axiosCustomInstance.post('/api/users', userData).then((res) => {
				if (
					(res.data.matchedCount === 0 && res.data.upsertedCount) ||
					(res.data.matchedCount && res.data.upsertedCount === 0)
				) {
					notifyUser('success', 'Account created successfully!');
				} else {
					notifyUser('error', 'Something went wrong!');
				}
			});
		}
	};

	return (
		<form
			className='w-[31rem] mt-10 mx-auto px-10 py-5 border-2 rounded'
			onSubmit={handleSignUp}>
			<Helmet>
				<title>Sign Up || Contact Pilot</title>
			</Helmet>
			<h1 className='text-center text-3xl mb-10'>Sign Up</h1>

			{/* Name */}
			<div className='w-full'>
				<label
					htmlFor='name'
					className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
					Name:
				</label>
				<input
					type='text'
					name='name'
					id='name'
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
					name='email'
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
					name='password'
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
					name='confirm_password'
					id='confirm_password'
					className='w-full p-2.5 text-gray-300 bg-gray-700 block rounded-lg border border-gray-30'
					placeholder='Confirm your password'
					required
				/>
			</div>
			<p className='text-sm mt-1'>
				Don't have any account?{' '}
				<Link to='/login' className='underline'>
					Login
				</Link>{' '}
				Now.
			</p>
			{/* Sign Up */}
			<input
				type='submit'
				value='Sign Up'
				className='bg-gray-200 mt-5 mx-auto block px-5 py-2 border-2 font-semibold text-black text-lg rounded cursor-pointer hover:bg-transparent hover:text-white'
			/>
		</form>
	);
}
