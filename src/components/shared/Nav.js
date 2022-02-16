import Logo from '@/assets/logo.svg';

const Nav = () => {
	return (
		<nav className='w-full bg-darkAccent shadow-md'>
			<div
				className='w-full mx-auto flex justify-between items-center px-4 py-2'
				style={{ maxWidth: '1200px' }}
			>
				<img src={Logo} alt='Logo' className='' />
				<div className='flex items-center'>
					<a
						href='tel:1-777-202-9630'
						className='uppercase tracking-tight text-white font-medium'
					>
						1 877 202 9630
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
