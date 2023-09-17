export default function Contact({ contact, serial }) {
	// ! Required variables
	const { name, phone, email } = contact;

	return (
		<div className='px-4 py-3 border-b-2 flex items-center justify-between last:border-b-0'>
			<p className='w-1/4 text-start'>
				<span className='mr-3'>{serial}.</span> {name}
			</p>
			<p className='w-1/4 text-start'>{phone}</p>
			<p className='w-1/3 text-start'>{email}</p>
		</div>
	);
}
