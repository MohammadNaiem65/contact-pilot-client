import { Link } from "react-router-dom";

export default function Login() {
	// ! Required variables

	return (
		<form className='w-[31rem] mt-32 mx-auto px-10 py-5 border-2 rounded'>
			<h1 className='text-center text-3xl mb-10'>Login</h1>

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
            <p className="text-sm mt-1">Don't have any account? <Link to='/sign-up' className="underline">Sign Up</Link> Now.</p>

			{/* Submit */}
			<input
				type='submit'
				value='Login'
				className='bg-gray-200 mt-5 mx-auto block px-5 py-2 border-2 font-semibold text-black text-lg rounded cursor-pointer hover:bg-transparent hover:text-white'
			/>
		</form>
	);
}
