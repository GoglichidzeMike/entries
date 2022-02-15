import FileInput from '@/components/shared/FileInput';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ImageStage.scss';

const ImageStage = (props) => {
	const { handleBackSide, handleFrontSide, handleSelfie, submitHandler } = props;
	// const [images, setImages] = useState([]);
	const [selfieToggle, setSelfieToggle] = useState(false);

	const toggleSelfie = () => {
		setSelfieToggle(!selfieToggle);
	};

	return (
		<motion.div
			key='collapsed'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='flex justify-between w-full max-w-sm p-6 rounded-lg shadow-md bg-main relative overflow-hidden'
		>
			<div className='absolute top-0 left-0 w-full bg-darkAccent h-4 shadow'></div>
			<div className='w-full'>
				<div className='mb-6 mt-3'>
					<p className='text-center text-dark font-medium text-2xl'>
						Upload images
					</p>
					<p className='text-center text-dark'>
						Upload pictures of your driver's license (JPEG or PNG).
					</p>
				</div>
				<div className='flex'>
					<FileInput
						name='cardFrontImg'
						placeholder='Your Order Id here'
						onChangeHandler={handleFrontSide}
					/>
					<FileInput
						name='cardBackImg'
						placeholder='Your Order Id here'
						onChangeHandler={handleBackSide}
					/>
				</div>
				<div className='flex items-center justify-center mb-4'>
					<span className='mr-2'>Include selfie with the document?</span>
					<label className='switch'>
						<input type='checkbox' onChange={toggleSelfie} />
						<span className='slider round'></span>
					</label>
				</div>
				<div
					className={`${
						selfieToggle ? 'max-h-96' : 'max-h-0'
					} flex items-center justify-center w-full overflow-hidden max-height-transition`}
				>
					<FileInput
						name='selfieImg'
						placeholder='Your Order Id here'
						onChangeHandler={handleSelfie}
					/>
				</div>
				<button onClick={submitHandler} className='w-full p-2 font-bold tracking-widest text-center transition-colors duration-300 ease-linear bg-third rounded-md shadow cursor-pointer text-dark hover:bg-secondary'>
					Submit
				</button>
			</div>
		</motion.div>
	);
};

export default ImageStage;
