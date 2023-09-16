import { createContext, useState } from 'react';

export const UserContext = createContext({});

export default function UserDataProvider({ children }) {
	const [user, setUser] = useState(null);

	// ! Module scaffolding
	const userInfo = {
		user,
		setUser,
	};

	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
}
