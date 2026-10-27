import { useContext, useRef } from 'react'
import { PostListContext } from '../contexts/PostListContext'
import { useNavigate } from 'react-router-dom'
/** @import {Reaction , Post} from "../types/PostTypes.d.mjs*/

export default function CreatePostForm() {
	/** @type {Post}*/
	const Post = {
		id: '',
		/**@type {Reaction} */
		reactions: {
			likes: 0,
			dislikes: 0,
		},
	}
	const navigateTo = useNavigate()
	const { addPost } = useContext(PostListContext)

	const titleRef = useRef(''),
		bodyRef = useRef(''),
		tagsRef = useRef(''),
		userIdRef = useRef('')

	const handlePost = {
		submit: function (e) {
			e.preventDefault()
			Post.id = crypto.randomUUID()
			Post.title = titleRef.current.value
			Post.body = bodyRef.current.value
			Post.tags =
				tagsRef.current.value ? tagsRef.current.value.split(',') : []
			Post.userId = userIdRef.current.value
			addPost(Post)
			navigateTo('/home')
		},
	}

	return (
		<div className='card bg-base-200 rounded-field min-h-1/2 w-10/12 p-6 shadow-sm md:w-1/2'>
			<form
				className='flex h-full flex-col justify-between gap-4 **:not-[textarea]:flex-none'
				onSubmit={e => handlePost.submit(e)}>
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
					className='textarea field-sizing-content w-full flex-1 resize-none max-block-[7lh]'
					id='Post_Body'
					placeholder='Post Message'
					ref={bodyRef}></textarea>
				<label htmlFor='Post_Tags'>Tags</label>
				<input
					aria-autocomplete='both'
					className='input w-full'
					id='Post_Tags'
					placeholder='Tags, Separated, By, Comma'
					ref={tagsRef}
					type='text'
				/>
				<label htmlFor='Post_User'>User</label>
				<input
					aria-autocomplete='both'
					className='input w-full'
					id='Post_User'
					name='postUser'
					placeholder='example@email.eg'
					ref={userIdRef}
					type='email'
				/>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	)
}
