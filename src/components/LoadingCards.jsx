export default function LoadingCards() {
	return (
		<article className='card bg-base-200 card-md rounded-field relative min-h-60 shadow-md'>
			<div className='card-body'>
				<header>
					<div className='skeleton h-6 w-3/4'></div>
				</header>
				<div className='mt-2 flex gap-2'>
					<div className='skeleton h-4 w-16'></div>
					<div className='skeleton h-4 w-20'></div>
				</div>
				<div className='mt-4 space-y-2'>
					<div className='skeleton h-4 w-full'></div>
					<div className='skeleton h-4 w-5/6'></div>
				</div>
				<hr className='divider divider-default my-4 border-0' />
				<footer className='card-footer'>
					<div className='card-actions flex gap-2'>
						<div className='skeleton rounded-field h-10 w-20'></div>
						<div className='skeleton rounded-field h-10 w-20'></div>
					</div>
				</footer>
			</div>
			<div className='skeleton rounded-field absolute -top-2 -right-2 h-10 w-10'></div>
		</article>
	)
}
