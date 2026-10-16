import { useContext } from 'react'
import { useRef } from 'react'
import { PostListContext } from '../contexts/PostListContext'

export default function CreatePostForm() {
	/** @type {import("../contexts/PostListContext").Post} */
	const Post = {
		id: '',
		/**@type {import('../contexts/PostListContext').Reaction} */
		reactions: {
			likes: 0,
			dislikes: 0,
		},
	}
	const { addPost } = useContext(PostListContext)

	const titleRef = useRef(''),
		bodyRef = useRef(''),
		tagsRef = useRef(''),
		userIdRef = useRef('')

	const handlePost = {
		clearValues: function () {
			titleRef.current.value = ''
			bodyRef.current.value = ''
			tagsRef.current.value = []
			userIdRef.current.value = '-1'
		},
		submit: function (e) {
			e.preventDefault()
			Post.id = crypto.randomUUID()
			Post.title = titleRef.current.value
			Post.body = bodyRef.current.value
			Post.tags =
				tagsRef.current.value ? tagsRef.current.value.split(',') : []
			Post.userId = userIdRef.current.value
			addPost(Post)
			this.clearValues()
		},
	}

	return (
		<div className='card bg-base-200 rounded-field min-h-1/2 w-10/12 p-6 shadow-sm md:w-1/2'>
			<form
				action=''
				onSubmit={e => handlePost.submit(e)}
				className='flex h-full flex-col justify-between gap-4 **:not-[textarea]:flex-none'>
				<label htmlFor='Post_Title'>Title</label>
				<input
					id='Post_Title'
					type='text'
					placeholder='Post Title'
					className='input w-full'
					ref={titleRef}
				/>

				<label htmlFor='Post_Body'> Post</label>
				<textarea
					id='Post_Body'
					className='textarea field-sizing-content w-full flex-1 resize-none max-block-[7lh]'
					placeholder='Post Message'
					ref={bodyRef}></textarea>
				<label htmlFor='Post_Tags'>Tags</label>
				<input
					id='Post_Tags'
					type='text'
					placeholder='Post Title'
					className='input w-full'
					ref={tagsRef}
				/>
				<label htmlFor='Post_User'>User</label>
				<select
					id='Post_User'
					className='select w-full'
					name='postUser'
					refs={userIdRef}>
					<option value='' className='disabled' disabled>
						Select User
					</option>
					<option value='@userA'>User A</option>
					<option value='@userB'>User C</option>
					<option value='@userC'>User B</option>
				</select>

				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	)
}
