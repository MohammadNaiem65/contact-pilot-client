import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserDataProvider from './providers/MetaContext/MetaContext.jsx';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AddContact from './pages/AddContact/AddContact.jsx';
import './index.css';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/add-contact',
				element: <AddContact />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserDataProvider>
			<RouterProvider router={router} />
		</UserDataProvider>
	</React.StrictMode>
);
