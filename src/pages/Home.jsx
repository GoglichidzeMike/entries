import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ImageStage from './components/ImageStage';
import InfoStage from './components/InfoStage';
import axios from 'axios';

const Home = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [orderId, setOrderId] = useState('');
	const [backSideImage, setBackSideImage] = useState(null);
	const [frontSideImage, setFrontSideImage] = useState(null);
	const [selfieImage, setSelfieImage] = useState(null);
	const [imageStage, setImageStage] = useState(false);

	const submitHandler = () => {
		console.log(name);
		console.log(email);
		console.log(orderId);
		console.log(backSideImage);
		console.log(frontSideImage);
		console.log(selfieImage);

		const images = [];
		images.push({ images: frontSideImage }, { images: backSideImage });
		// handle submit here;
		const formData = new FormData();

		formData.append('name', name);
		formData.append('email', email);
		formData.append('orderId', orderId);
		formData.append('cardFrontImg', frontSideImage);
		formData.append('cardBackImg', backSideImage);
		formData.append('selfieImg', selfieImage);
		axios
			.post('http://localhost:5555/api/entries', formData, {
				headers: {
					'Content-type': 'multipart/form-data',
				},
			})
			.then((response) => {
				// handle successfull upload here
				console.log(response);
			})
			.catch((err) => {
				alert(err);
				console.log(err);
			});
	};

	const handleStage = () => {
		setImageStage(!imageStage);
	};
	const handleStartOver = () => {
		setImageStage(false);
		setName('');
		setEmail('');
		setOrderId('');
		setBackSideImage('');
		setFrontSideImage('');
		setSelfieImage('');
	};

	const handleFrontSideFile = (name, file, isValid) => {
		setFrontSideImage(file);
	};

	const handleBackSideFile = (name, file, isValid) => {
		setBackSideImage(file);
	};
	const handleSelfieFile = (name, file, isValid) => {
		setSelfieImage(file);
	};

	return (
		<div className='flex flex-col items-center justify-center w-full min-h-screen bg-accent text-dark'>
			{/* <div className='absolute top-42 left-0'>
				<p>name: {name}</p>
				<p>email: {email}</p>
				<p>orderId: {orderId}</p>
				<p>backSideImage: {backSideImage}</p>
				<p>frontSideImage: {frontSideImage}</p>
				<p>selfieImage: {selfieImage}</p>
			</div> */}

			<AnimatePresence>
				{!imageStage && (
					<InfoStage
						name={name}
						email={email}
						orderId={orderId}
						handleName={setName}
						handleEmail={setEmail}
						handleOrderId={setOrderId}
					/>
				)}
				{imageStage && (
					<ImageStage
						backSideImage={backSideImage}
						frontSideImage={frontSideImage}
						selfieImage={selfieImage}
						handleBackSide={handleBackSideFile}
						handleFrontSide={handleFrontSideFile}
						handleSelfie={handleSelfieFile}
						submitHandler={submitHandler}
					/>
				)}
			</AnimatePresence>
			<div className='w-full max-w-sm mt-2'>
				{!imageStage && (
					<button
						className='disabled:text-slate-500 disabled:bg-slate-300 disabled:cursor-not-allowed w-full p-2 font-bold tracking-widest text-center transition-all duration-300 ease-linear rounded-md shadow-md cursor-pointer bg-third text-dark hover:bg-main'
						disabled={name === '' || !/\S+@\S+\.\S+/.test(email)}
						onClick={handleStage}
					>
						Next
					</button>
				)}
				{imageStage && (
					<span
						className='text-right text-white font-medium text-sm cursor-pointer px-2 py-1 bg-darkAccent hover:text-darkAccent rounded shadow hover:bg-white duration-200 transition-colors'
						onClick={handleStartOver}
					>
						Start Over
					</span>
				)}
			</div>
		</div>
	);
};

export default Home;
