import { PostListContext } from '../contexts/PostListContext'
import LoadingCards from './LoadingCards'
import NoPostsCard from './NoPostsCard'
import PostCard from './PostCard'
import { useContext } from 'react'

export default function PostsList() {
	const { PostList, fetchingPosts } = useContext(PostListContext)
	return (
		<section className='flex min-h-full w-10/12 flex-col justify-start gap-6 md:w-1/2'>
			{!fetchingPosts && PostList.length <= 0 && <NoPostsCard />}
			{fetchingPosts && <LoadingCards />}
			{PostList.map(
				item =>
					item.id && (
						<PostCard
							key={item.id}
							id={item.id}
							title={item.title}
							post={item.body}
							tags={item.tags}
							likes={item.reactions.likes}
							dislikes={item.reactions.dislikes}
						/>
					)
			)}
		</section>
	)
}
