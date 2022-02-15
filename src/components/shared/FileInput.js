import { useState, useRef, useEffect } from 'react';

const FileInput = (props) => {
	const filePickerRef = useRef();
	const [image, setImage] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState();
	const { name, placeholder, onChangeHandler } = props;

	const handleClick = (e) => {
		filePickerRef.current.click();
		// setImage([...e.target.files]);
	};

	useEffect(() => {
		if (!image) {
			return;
		} else {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setPreviewUrl(fileReader.result);
			};
			fileReader.readAsDataURL(image);
		}
	}, [image]);

	const handleInput = (e) => {
		let pickedFile;
		let fileIsValid = isValid;
		if (e.target.files && e.target.files.length === 1) {
			pickedFile = e.target.files[0];
			setImage(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			fileIsValid = false;
		}

		onChangeHandler(name, pickedFile, fileIsValid);
	};

	return (
		<div className='mb-6'>
			<input
				type='file'
				id={name}
				className='hidden'
				placeholder={placeholder}
				onChange={handleInput}
				accept='image/*'
				ref={filePickerRef}
			/>
			<div
				className='w-40 h-40 m-1 shadow-md hover:bg-secondary transition-colors duration-200 ease-linear rounded flex items-center justify-center flex-col border border-gray-500 p-2 text-center cursor-pointer'
				onClick={handleClick}
			>
				{previewUrl && (
					<img
						src={previewUrl}
						alt=''
						className='w-full rounded max-w-full max-h-full object-contain'
					/>
				)}
				{!previewUrl && (
					<>
						<div className='bg-accent p-2 rounded-full shadow'>
							{name === 'cardFrontImg' && (
								<svg
									width='19'
									height='14'
									viewBox='0 0 19 14'
									className='w-8 h-8'
								>
									<path
										fill='#FFF'
										fillRule='evenodd'
										d='M.558 1.007C.558.45 1.012 0 1.558 0h15.656c.552 0 1 .45 1 1.007v11.986c0 .556-.454 1.007-1 1.007H1.558c-.552 0-1-.45-1-1.007V1.007zm2 1.993v8h6.2V3h-6.2zM9.79 3v2h6.2V3h-6.2zm0 3v2h6.2V6h-6.2zm0 3v2h6.2V9h-6.2z'
									></path>
								</svg>
							)}
							{name === 'cardBackImg' && (
								<svg
									width='19'
									height='14'
									viewBox='0 0 19 14'
									className='w-8 h-8'
								>
									<path
										fill='#FFF'
										fillRule='evenodd'
										d='M18.386 3V1.007c0-.557-.448-1.007-1-1.007H1.73c-.546 0-1 .45-1 1.007V3h17.656zm0 2v7.993c0 .556-.454 1.007-1 1.007H1.73c-.552 0-1-.45-1-1.007V5h17.656zM3 9v2h6V9H3z'
									></path>
								</svg>
							)}
							{name === 'selfieImg' && (
								<img
									alt='Selfie Icon'
									className='w-8 h-8'
									fill='#FFF'
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEqklEQVRogeWZXWhcRRTHf7vUfklqG6s20qS0CBUVSqlFBC1YfVDUEkVBa6qoKCpWRdGHBn3w60GhCuqTD+1DBVurokFRa8EPKhHxGxFrtFa6NmrTJikxURPXh/Of3NvZu7v33ty7SfQPw+ycmTnnf+brzpyFfLAGeBn4BRgDjgI/A7uAh4FzcrKbGeYA24FyjPQF0D45NGujCLyBkRwCNgFLgRnAPGAZcAXwDNBL4NBrQPMk8K3ACmAbtozKwCHgjDp9ZgF3A/3qsxdoy5FjTRSAx7E94Eb3D2BdAh1LsSVWBr5nkmbmORH4E9iMzcJxKfQsAD6TrrewAWoY1svwUeCiDPS1Ab9L580Z6IuFeUCfjN6Qod4O6ewFjs9Qb1V0yuCuiLrZQDfwEemWmVti96VmFxMFYL+MXRBR/xjBxu9MoX+D+vZgx3luWC1DP0XULcM2/j+hdGdC/TOBkmysSU+zPjbJyLMRdVtV1wXcCIyqvAU4IYGNp9XvqQkxrYMXZeR6T74QGMFmYZVkVwGDal8CbiHevrlEfb7KgG9VfC0jKz357ZK/68mXYN8Gt29KwKPAudjpF4W5wDA2o7mdXgdF6BRP/ork91fptw74kMqLY3eV9ntUf94E+VbFkAzM9eQ9kq+q6HEsVgOPEBAtE306Pa+6e+ISS3rEzVY+4slblR/APmwdVF41isBy4DtspMcknxFh51vlZybkFxsj2EjNCskKBKO7MfT7Oq9vh1c3TPTsAlyqutfjEks6I38rD58+ZWBAv6NGtxpGa/TpVX5yAn2JcBgjvsCTfyn5xdhor6dyaRW8Oqcr6ureprofsyLu4zcZOMmTu835YApdUaM+h+Cl+f9EK7CT4Es8HdIg8Cp2Eo470ZejwbzTYfnATgl2AIuqzNhUxCLgJQLu48tpOjnh0ELo+HdT5NBOENqZSqlEdEBvnL/vSInGk0ziTKQj7noBwQfML08VVONVhnzfxddit9wjWOBuHxYXvoZ0gYm68JeWX06DzdReIj3A2gnyrJBn5UgRu0e5QHY/duNtVloB3AR8rPox4LYE+hviSBPwdqjvEBZ5j0IBu5O5SMuVMW00xJEd6rMPi3fF2QP3qk8flU/nKOTuyFq1HwROk+xULFhXi2ABeEd9n4xhx/EqcuwrNDNHutT+oRDB9yT7gNqPrZUE+6mpjh3Hy39pZuJIE/b8HSO44lwd0lHGNv+JNXS8r3Z+rKyhjpyvtp+GZN2SbQV+1e8D2Hs+Kk51l9psi+mI/9LMxJFb1XaLyksITq1m7B+pcDxrEAvidRJ8jE9XXS+1ketmf0Btn1DZLas3Q20KwOXAbuCvkP6zQm0GJFtYw1ZNRyZ6RXFxrmHl85V/A1xGENbpwoLSG7BABdi73GGv8uWkRJLwTRT8kI6LdxWBFzAnnHOu/LnKM0N6fgDOxqIne9IQydqR/crbsEtjeCm4sguDhj+aR5TPJyWyduQT5RdixEdDbd2+uUN52JF+5Un+R6mAv4mm5cMqypH2KepM3afufyH40A8W5CpjoZWWSSSVFC0EoaztYGe3CyhPx3QIWOy8a8XeFAM5Gsw6DWgmFgP8CxGT7Et5o0DcAAAAAElFTkSuQmCC'
								/>
							)}
						</div>
						<p className='block text-gray-800'>
							Drag & drop or click to upload
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default FileInput;
