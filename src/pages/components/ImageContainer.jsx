export const ImageContainer = (props) => {
	const { handleImageClick, entry } = props;
	return (
		<div className='image-preview-container'>
			<div className='image-container'>
				<img
					src={process.env.REACT_APP_STATIC_URL + entry.cardFrontImg}
					alt='Card Front'
					load='lazy'
					onClick={handleImageClick(entry.cardFrontImg, entry.email, 'front')}
				/>
			</div>
			<div className='image-container'>
				<img
					src={process.env.REACT_APP_STATIC_URL + entry.cardBackImg}
					alt='Card Front'
					load='lazy'
					onClick={handleImageClick(entry.cardBackImg, entry.email, 'back')}
				/>
			</div>
			{entry.selfieImg && (
				<div className='image-container'>
					<img
						src={process.env.REACT_APP_STATIC_URL + entry.selfieImg}
						alt='Card Front'
						load='lazy'
						onClick={handleImageClick(entry.selfieImg, entry.email, 'selfie')}
					/>
				</div>
			)}
		</div>
	);
};
