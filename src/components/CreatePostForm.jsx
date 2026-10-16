export default function CreatePostForm() {
	return (
		<div className='card bg-base-200 rounded-field min-h-1/2 w-10/12 p-6 shadow-sm md:w-1/2'>
			<form
				action=''
				className='flex h-full flex-col justify-between gap-4 **:not-[textarea]:flex-none'>
				<label htmlFor='Post_Title'>Title</label>
				<input
					id='Post_Title'
					type='text'
					placeholder='Post Title'
					className='input w-full'
				/>
				<label htmlFor='Post_Body'> Post</label>
				<textarea
					id='Post_Body'
					className='textarea field-sizing-content w-full flex-1 resize-none max-block-[7lh]'
					placeholder='Post Message'></textarea>
				<button
					className='btn btn-primary'
					onClick={e => {
						e.preventDefault()
					}}>
					Submit
				</button>
			</form>
		</div>
	)
}
