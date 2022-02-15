const TextInput = (props) => {
	const { name, title, type, placeholder, onChangeHandler, value = '' } = props;

	return (
		<div className='mb-6'>
			<label
				htmlFor={name}
				className='block mb-1 text-sm font-medium text-dark'
			>
				{title}
			</label>
			<input
				type={type}
				id={name}
				className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring focus:ring-third focus:outline-none  block w-full p-2.5'
				placeholder={placeholder}
				onChange={onChangeHandler}
				accept={type === 'file' ? 'image/*' : ''}
				value={type === 'file' ? '' : value}
				required=''
			/>
		</div>
	);
};

export default TextInput;
