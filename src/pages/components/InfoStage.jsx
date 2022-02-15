import TextInput from '@/components/shared/TextInput';
import { motion } from 'framer-motion';

const InfoStage = (props) => {
	const { handleName, handleEmail, handleOrderId, name, email, orderId } =
		props;

	const handleNameInput = (e) => {
		console.log(e.target.value);
		handleName(e.target.value);
	};
	const handleEmailInput = (e) => {
		console.log(e.target.value);
		handleEmail(e.target.value);
	};
	const handleOrderInput = (e) => {
		console.log(e.target.value);
		handleOrderId(e.target.value);
	};

	return (
		<motion.div
			key='expanded'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='flex justify-between w-full max-w-sm p-6 rounded-lg shadow-md bg-main relative overflow-hidden'
			style={{ minHeight: '375.89px' }}
		>
			<div className='absolute top-0 left-0 w-full bg-darkAccent h-4 shadow'></div>
			<div className='w-full'>
				<p className='mb-6 mt-3 font-medium text-center uppercase text-dark'>
					Enter Your Details
				</p>
				<TextInput
					value={name}
					name='name'
					title='Full Name'
					type='text'
					onChangeHandler={handleNameInput}
					placeholder='Your name here'
				/>
				<TextInput
					value={email}
					name='email'
					title='Email'
					type='email'
					onChangeHandler={handleEmailInput}
					placeholder='Your email here'
				/>
				<TextInput
					value={orderId}
					name='orderId'
					title='Order Id'
					type='text'
					onChangeHandler={handleOrderInput}
					placeholder='Your Order Id here'
				/>
			</div>
		</motion.div>
	);
};

export default InfoStage;
