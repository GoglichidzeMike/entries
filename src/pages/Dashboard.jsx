import { useState, useEffect } from 'react';
import { getEntries, deleteEntry } from '@/api/dataProvider.js';
import { EntriesTable } from './components/EntriesTable';
import { ImageModal } from './components/ImageModal';
import { saveAs } from 'file-saver';
import './Dashboard.scss';
//
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
	const [entriesData, setEntriesData] = useState({ data: [] });
	const [isLoading, setIsLoading] = useState(false);
	const [modalImage, setModalImage] = useState({ data: {} });
	const [isModalActive, setIsModalActive] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const notify = (message) =>
		toast.success(message, {
			// icon: '👏',
			position: 'top-right',
			iconTheme: {
				primary: 'green',
				secondary: '#fff',
			},
			style: {
				background: '#b9fbc0',
				color: '#005f73',
			},
			// Aria
			ariaProps: {
				role: 'status',
				'aria-live': 'polite',
			},
		});

	const downloadImage = () => {
		const { value, type, email } = modalImage.data;
		saveAs(
			process.env.REACT_APP_STATIC_URL + value,
			type + '_' + email + '.' + value.split('.')[1]
		); // Put your image url here.
		notify('Image downloaded');
		setIsModalActive(false);
		document.body.style.overflow = 'scroll';
	};

	useEffect(() => {
		fetchEntries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	const fetchEntries = async () => {
		const query = {
			q: searchQuery,
		};
		setIsLoading(true);
		getEntries(query)
			.then((response) => {
				setIsLoading(false);
				const { entries = [] } = response;
				setEntriesData({ data: entries });
				console.log(entriesData);
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	const handleDelete = (value) => async (id) => {
		setIsLoading(true);
		const payload = { id: value };
		deleteEntry(payload)
			.then((response) => {
				setIsLoading(false);
				notify('Entry Deleted');
				fetchEntries();
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	const handleImageClick = (value, email, type) => () => {
		// console.log(second);
		setModalImage({
			data: {
				value,
				email,
				type,
			},
		});
		setIsModalActive(true);
		document.body.style.overflow = 'hidden';
	};

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className='min-h-screen my-10'>
			{isModalActive && (
				<ImageModal
					downloadImage={downloadImage}
					setIsModalActive={setIsModalActive}
					modalImage={modalImage}
				/>
			)}
			<h1 className='text-xl text-center'>Entries</h1>

			<div className='container my-4 pl-4'>
				<label htmlFor='search font-medium text-dark'>Search</label>
				<input
					type='text'
					name='search'
					onChange={handleSearch}
					className='shadow rounded ml-2 focus:outline-dark p-1 text-sm'
				/>
			</div>

			<EntriesTable
				entries={entriesData.data}
				deleteEntry={handleDelete}
				isLoading={isLoading}
				handleImageClick={handleImageClick}
				notify={notify}
			/>
			<Toaster />
		</div>
	);
};

export default Dashboard;
