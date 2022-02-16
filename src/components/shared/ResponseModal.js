import { motion } from 'framer-motion';
import './ResponseModal.scss';

const ResponseModal = (props) => {
	const { type, setIsModalActive, handleStartOver } = props;

	return (
		<div className='w-screen h-screen absolute top-0 left-0 flex items-center justify-center z-50 bg-slate-400 bg-opacity-60'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='border rounded-md px-4 py-6 bg-white w-96 max-w-full shadow-lg'
			>
				{type === 'loading' && (
					<div className='w-full flex-col flex items-center justify-center p-12'>
						<p className='text-center mb-1'>Processing</p>
						<div className='loader'></div>
					</div>
				)}
				{type === 'success' && (
					<>
						<h3 className='text-center text-green-700 uppercase font-medium text-xl mb-8'>
							Requset Sent
						</h3>
						<div className='text-center'>
							<p className='mb-2'>
								Your request was sucessfully submitted and Our team will contact
								you shortly.
							</p>
							<p className='mb-2'>Feel free to contact us for more details.</p>
						</div>
						<div className='flex justify-center mt-8'>
							<span
								className='stext-right text-white font-medium text-sm cursor-pointer px-2 py-1 bg-darkAccent hover:text-darkAccent rounded shadow hover:bg-white duration-200 transition-colors'
								onClick={handleStartOver}
							>
								Start Over
							</span>
						</div>
					</>
				)}
				{type === 'error' && (
					<>
						<h3 className='text-center text-red-700 uppercase font-medium text-xl mb-8'>
							Error Sending Details
						</h3>
						<div className='text-center'>
							<p className='mb-2'>There was an error sending your request</p>
							<p className='mb-2'>
								Please try again or contact us for assistance
							</p>
						</div>
						<div className='flex justify-center mt-8'>
							<span
								className='stext-right text-white font-medium text-sm cursor-pointer px-2 py-1 bg-darkAccent hover:text-darkAccent rounded shadow hover:bg-white duration-200 transition-colors'
								onClick={() => setIsModalActive(false)}
							>
								Try Again
							</span>
						</div>
					</>
				)}
			</motion.div>
		</div>
	);
};

export default ResponseModal;
