import { useContext } from 'react'
import { PageContext } from '../contexts/PageContext'

export default function Navbar() {
	const { currentPage, changePage } = useContext(PageContext)
	return (
		<div className='navbar bg-base-100 border-base-200 sticky top-0 z-10 mb-6 flex-none border shadow-lg'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost md:hidden'>
						<svg
							aria-label='Menu'
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							{' '}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{' '}
						</svg>
					</div>
					<ul
						tabIndex={-1}
						className='menu menu-xl dropdown-content bg-base-200 rounded-box z-1 mt-3 w-56 p-2 shadow'>
						<li onClick={() => changePage('HomePage')}>
							<button
								href='#'
								className={`${currentPage === 'HomePage' && 'menu-active'}`}>
								Home
							</button>
						</li>
						<li onClick={() => changePage('CreatePage')}>
							<button
								href='#'
								className={`${currentPage === 'CreatePage' && 'menu-active'}`}>
								Create Post
							</button>
						</li>
					</ul>
				</div>
				<a className='btn btn-ghost text-xl'>riSocial</a>
			</div>
			<div className='navbar-center hidden md:flex'>
				<ul className='menu menu-horizontal menu-lg px-1'>
					<li onClick={() => changePage('HomePage')}>
						<button
							className={`${currentPage === 'HomePage' && 'menu-active'}`}>
							Home
						</button>
					</li>
					<li onClick={() => changePage('CreatePage')}>
						<button
							className={`${currentPage === 'CreatePage' && 'menu-active'}`}>
							Create Post
						</button>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://upload.wikimedia.org/wikipedia/commons/b/b8/The_Gunpowder_Plot_Conspirators%2C_1605_from_NPG_%28cropped%29.jpg'
							/>
						</div>
					</div>
					<ul
						tabIndex={-1}
						className='menu menu-xl dropdown-content bg-base-200 rounded-box z-1 mt-3 w-56 p-2 shadow'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
