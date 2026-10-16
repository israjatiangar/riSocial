import { useContext } from 'react'
import CreatePostForm from '../components/CreatePostForm'
import PostsList from '../components/PostsList'
import { PageContext } from '../contexts/PageContext'
import PostListContextProvider from '../contexts/PostListContext'

export default function Pages() {
	const { currentPage } = useContext(PageContext)
	return (
		<section className='flex w-full flex-1 flex-col items-center justify-center gap-6'>
			{currentPage === 'HomePage' ?
				<PostListContextProvider>
					<PostsList />
				</PostListContextProvider>
			:	<CreatePostForm />}
		</section>
	)
}
