import { toast } from 'react-toastify';

export default function notifyUser(type, text) {
	toast[type](text, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});
}
