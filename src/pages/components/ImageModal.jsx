import { motion } from 'framer-motion';

export const ImageModal = (props) => {
	const { downloadImage, setIsModalActive, modalImage } = props;
	const handleClick = (e) => {
		console.log(e.target.classList);
		if (e.target.classList.contains('backdrop')) {
			setIsModalActive(false);
			document.body.style.overflow = 'scroll';
		}
	};

	const closeModal = () => {
		setIsModalActive(false);
		document.body.style.overflow = 'scroll';
	};
	return (
		<div
			className='absolute top-0 left-0 h-screen w-screen flex items-center justify-center z-50 backdrop'
			onClick={handleClick}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='image-modal p-2 bg-white rounded shadow overflow-hidden'
				style={{ maxWidth: '600px', maxHeight: '90%' }}
			>
				<div className='mb-2 flex justify-between'>
					<p
						className='bg-third px-2 py-1 rounded cursor-pointer '
						onClick={downloadImage}
					>
						Download
					</p>
					<div className='close' onClick={closeModal}></div>
				</div>
				<img
					src={process.env.REACT_APP_STATIC_URL + modalImage.data.value}
					alt='Modal'
					className='mx-auto rounded shadow-md object-contain'
					style={{ maxWidth: '400px', maxHeight: '90%' }}
				/>
			</motion.div>
		</div>
	);
};
