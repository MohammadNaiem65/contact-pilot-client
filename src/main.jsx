import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import UserDataProvider from './providers/UserContext/UserContext.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserDataProvider>
			<RouterProvider router={router} />
		</UserDataProvider>
	</React.StrictMode>
);
