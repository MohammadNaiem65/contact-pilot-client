import { createContext, useState } from 'react';

export const MetaContext = createContext({});

export default function UserDataProvider({ children }) {
	// ! Required variables
	const [user, setUser] = useState(null);
	const [modalDetails, setModalDetails] = useState({
		showModal: false,
		modalData: {},
	});

	// ! Module scaffolding
	const userInfo = {
		user,
		setUser,
		modalDetails,
		setModalDetails,
	};

	return (
		<MetaContext.Provider value={userInfo}>{children}</MetaContext.Provider>
	);
}
