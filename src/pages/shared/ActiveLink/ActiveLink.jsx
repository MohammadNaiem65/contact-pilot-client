import { NavLink } from 'react-router-dom';

export default function ActiveLink({ children, to }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? 'px-2 border-b-2 border-white'
					: 'px-2 border-b-2 border-transparent'
			}>
			{children}
		</NavLink>
	);
}
