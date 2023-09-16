import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';

export default function UserAvailable() {
	// ! Required variables
	const { user } = useContext(UserContext);
	return (
		<div>
			<h1 className='text-center text-3xl mt-12'>
				Welcome Back {user?.name} 👋
			</h1>
		</div>
	);
}
