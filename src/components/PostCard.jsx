export default function PostCard({ title, post, likes, dislikes }) {
	return (
		<article className='card bg-base-200 card-md rounded-field w-full shadow-md'>
			<div className='card-body'>
				<header>
					<h2 className='card-title'>{title}</h2>
				</header>
				<p>{post}</p>
				<footer className='card-footer'>
					<div className='card-actions'>
						<button className='btn btn-primary'>
							{likes} Likes
						</button>
						<button className='btn btn-ghost'>
							{dislikes} Dislikes
						</button>
					</div>
				</footer>
			</div>
		</article>
	)
}
