import axiosCustomInstance from '../../../axios/axiosCustomInstance';

export default function DownloadContactsBtn({ userEmail }) {
	const handleDownload = () => {
		axiosCustomInstance({
			url: `/api/contacts/download?email=${userEmail}`,
			method: 'GET',
			responseType: 'blob', // Important
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'user_data.xlsx');
			document.body.appendChild(link);
			link.click();
		});
	};

	return (
		<button
			className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold absolute top-0 rounded'
			onClick={handleDownload}>
			Download
		</button>
	);
}
