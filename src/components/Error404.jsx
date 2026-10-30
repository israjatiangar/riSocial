import { Link } from 'react-router-dom'

export default function Error404() {
	return (
		<>
			<title>riSocial | Error 404</title>
			<section className='align-center flex h-full w-screen flex-col place-items-center'>
				<div class='mockup-window border-base-300 bg-base-200 w-10/12 border shadow-2xl'>
					<div class='border-base-300 bg-base-300 grid h-80 place-content-center place-items-center gap-6 border-t p-4 text-center'>
						<h2 className='text-6xl'>Error 404</h2>
						<p>
							Sorry, the page you are looking for could not be
							found.
							<br />
							Or the page does not Exist.
						</p>
						<Link to='/home' className='btn btn-primary w-6/12'>
							Go to Home
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
