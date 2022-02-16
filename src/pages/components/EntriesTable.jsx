import './EntriesTable.scss';
import '@/components/shared/ResponseModal.scss';
import { ImageContainer } from './ImageContainer';
import { updateStatus } from '@/api/dataProvider.js';

export const EntriesTable = (props) => {
	const { entries, deleteEntry, isLoading, handleImageClick } = props;

	const handleStatusChange = (value) => (e) => {
		// entryId, status
		console.log(value);
		console.log(e.target.value);
		const payload = {
			entryId: value,
			status: e.target.value,
		};
		updateStatus(payload)
			.then((response) => {
				console.log(response);
				//TODO: Note create status change notification here
			})
			.catch((error) => {
				alert('something went wrong, please try again ');
				console.log(error);
			});
	};

	return (
		<div className='container table w-full'>
			<div className='table-header'>
				<div className='w-16 py-2 px-3 text-center border-r border-gray-300'>
					#
				</div>
				<div className='w-32 py-2 px-3 text-center border-r border-gray-300'>
					Delete
				</div>
				<div className='w-40 py-2 px-3 text-center border-r border-gray-300'>
					Status
				</div>
				<div className='w-2/6 py-2 px-3 border-r border-gray-300'>Name</div>
				<div className='w-2/6 py-2 px-3 border-r border-gray-300'>Email</div>
				<div className='w-1/6 py-2 px-3 border-r border-gray-300'>OrderId</div>
				<div className='w-2/6 py-2 px-3 border-r border-gray-300'>Pictures</div>
			</div>

			<div className='table-body relative shadow'>
				{isLoading && (
					<div className='absolute left-0 top-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-50'>
						<div className='loader'></div>
					</div>
				)}

				{entries.length > 0 &&
					entries.map((entry, index) => {
						return (
							<div key={index} className='bg-main flex table-row-el text-sm'>
								<div className='w-16 py-2 px-3 text-center border-r border-gray-300 flex items-center justify-center'>
									{index + 1}
								</div>
								<div className='w-32 py-2 px-3 text-center border-r border-gray-300 flex items-center justify-center'>
									<p
										className='bg-red-300 rounded text-dark cursor-pointer px-2 py-1 text-sm hover:bg-red-800 transition duration-200 ease-linear hover:text-main'
										onClick={deleteEntry(entry._id)}
									>
										Delete
									</p>
								</div>
								<div className='w-40 py-2 px-1 text-center border-r border-gray-300 flex items-center justify-center'>
									<select
										name='status'
										className='w-full rounded p-1 shadow text-xs'
										defaultValue={entry.status}
										onChange={handleStatusChange(entry._id)}
									>
										<option
											value='Pending'
											defaultValue={entry.status === 'Pending'}
										>
											Pending
										</option>
										<option
											value='Completed'
											defaultValue={entry.status === 'Completed'}
										>
											Completed
										</option>
										<option value='New' defaultValue={entry.status === 'New'}>
											New
										</option>
									</select>
								</div>
								<div className='w-2/6 py-2 px-3 border-r border-gray-300 flex items-center'>
									{entry.name}
								</div>
								<div className='w-2/6 py-2 px-3 border-r border-gray-300 flex items-center'>
									{entry.email}
								</div>
								<div className='w-1/6 py-2 px-3 border-r border-gray-300 flex items-center'>
									{entry.orderId}
								</div>
								<div className='w-2/6 py-1 px-3 border-r border-gray-300'>
									<ImageContainer
										entry={entry}
										handleImageClick={handleImageClick}
									/>
								</div>
							</div>
						);
					})}
				{!entries.length && (
					<div className='w-full flex py-10 text-center'>
						<p className='w-full'>Entries not found</p>
					</div>
				)}
			</div>
		</div>
	);
};
