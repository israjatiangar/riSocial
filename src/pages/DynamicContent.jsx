import { useContext } from 'react'
import CreatePostForm from '../components/CreatePostForm'
import PostsList from '../components/PostsList'
import { AppContext } from '../contexts/AppContext'

export default function Pages() {
	const { Page } = useContext(AppContext)
	return (
		<section className='flex w-full flex-1 flex-col items-center justify-center gap-6'>
			{Page.currentPage === 'HomePage' ?
				<PostsList />
			:	<CreatePostForm />}
		</section>
	)
}
