import { Link } from 'react-router-dom';

export default function UserUnavailable() {
	// ! Required variables
	const messages = [
		'Not So Fast 😉 Login First',
		"What's black and white? Your login button! 😂",
		'Prepare for liftoff! Logging in is like launching a rocket 🚀',
		"Hey, it's login o'clock! 😎",
		"Knock, knock! Who's there? It's your favorite login screen 😜",
		'Why did the chicken cross the internet? To get to the other side of our login 🐔🤣',
		'Our login is so fast, it makes Usain Bolt look like a turtle 🐢',
		"If you can guess the secret login handshake, you'll be granted access to the fun zone! 😉",
		'The only thing smoother than butter is our login experience 🧈',
		"Welcome back! We're not saying our login is the best, but it's in the top one! 😎",
	];

	return (
		<div className='mt-36'>
			<h1 className='text-xl flex items-center justify-center'>
				<h1 className='text-xl flex items-center justify-center'>
					{messages[parseInt(Math.random() * 10)]}
				</h1>
			</h1>
			<Link
				type='submit'
				to='/login'
				className='w-fit bg-gray-200 mt-5 mx-auto block px-5 py-2 border-2 font-semibold text-black text-lg rounded cursor-pointer hover:bg-transparent hover:text-white'>
				Login
			</Link>
		</div>
	);
}
