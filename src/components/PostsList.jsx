import PostCard from './PostCard'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export default function PostsList() {
	const { PostList } = useContext(AppContext)
	return (
		<section className='flex min-h-full w-10/12 flex-col justify-start gap-6 md:w-1/2'>
			{PostList.postList.map(
				item =>
					item.id && (
						<PostCard
							key={item.id}
							title={item.title}
							post={item.body}
							likes={item.reactions.likes}
							dislikes={item.reactions.dislikes}
						/>
					)
			)}
		</section>
	)
}
