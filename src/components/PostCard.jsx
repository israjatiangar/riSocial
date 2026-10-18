import { HeartBreakIcon, HeartIcon, TrashIcon } from '@phosphor-icons/react'
import { useContext } from 'react'
import { PostListContext } from '../contexts/PostListContext'

export default function PostCard({ id, title, post, tags, likes, dislikes }) {
	const { deletePost, likePost, dislikePost } = useContext(PostListContext)
	const iconSize = 16
	return (
		<article className='card bg-base-200 card-md rounded-field relative w-full shadow-md'>
			<div className='card-body'>
				<header>
					<h2 className='card-title'>{title}</h2>
				</header>
				<div className='flex gap-1'>
					{tags &&
						tags.map(tag => (
							<span
								className='badge badge-sm badge-soft badge-primary'
								key={id + tag}>
								#{tag}
							</span>
						))}
				</div>
				<p className='text-base-content opacity-75'>{post}</p>
				<hr className='divider divider-default border-0' />
				<footer className='card-footer'>
					<div className='card-actions'>
						<button
							className='btn btn-primary'
							onClick={() => likePost(id)}>
							<HeartIcon size={iconSize} weight='duotone' />
							{likes}{' '}
						</button>
						<button
							className='btn btn-default btn-soft'
							onClick={() => dislikePost(id)}>
							<HeartBreakIcon size={iconSize} weight='duotone' />
							{dislikes}
						</button>
					</div>
				</footer>
			</div>
			<button
				className='btn btn-error btn-soft absolute -top-2 -right-2'
				onClick={() => deletePost(id)}>
				<TrashIcon size={iconSize} weight='duotone' />
			</button>
		</article>
	)
}
