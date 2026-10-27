import { useEffect } from 'react'
import { useState, useReducer, createContext } from 'react'
/** @import { Post } from "../types/PostTypes.d.mjs" */

// eslint-disable-next-line react-refresh/only-export-components
export const PostListContext = createContext({})

export default function PostListContextProvider({ children }) {
	const [fetchingPosts, setFetchingPosts] = useState(true)
	/** @type {[Array<Post>, function]} */
	const [postList, dispatchPostList] = useReducer(PostListReducer, [])

	function PostListReducer(postList, action) {
		let newPostList = []
		switch (action.type) {
			case 'Add':
				newPostList = [action.payload.post, ...postList]
				break
			case 'Delete':
				newPostList = postList.filter(
					item => item.id !== action.payload.id
				)
				break
			case 'Like':
				newPostList = postList.map(item => {
					return item.id === action.payload.id ?
							{
								...item,
								reactions: {
									...item.reactions,
									likes: item.reactions.likes + 1,
								},
							}
						:	item
				})
				break
			case 'Dislike':
				newPostList = postList.map(item => {
					return item.id === action.payload.id ?
							{
								...item,
								reactions: {
									...item.reactions,
									dislikes: item.reactions.dislikes + 1,
								},
							}
						:	item
				})
				break
			case 'GetPosts':
				newPostList = [...action.payload.posts]
				break
		}
		return newPostList
	}
	const PostList = {
		postList,
		fetchingPosts: fetchingPosts,

		/** @param {Post} post */
		addPost: post => {
			dispatchPostList({
				type: 'Add',
				payload: { post },
			})
		},
		/** @param {number} id*/
		deletePost: id => {
			dispatchPostList({
				type: 'Delete',
				payload: { id },
			})
		},
		likePost: id => {
			dispatchPostList({
				type: 'Like',
				payload: { id },
			})
		},
		dislikePost: id => {
			dispatchPostList({
				type: 'Dislike',
				payload: { id },
			})
		},
		getPosts: posts => {
			dispatchPostList({
				type: 'GetPosts',
				payload: { posts },
			})
		},
	}
	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal
		fetch('https://dummyjson.com/posts', { signal: signal })
			.then(res => res.json())
			.then(data => PostList.getPosts(data.posts))
			.catch(err => {
				if (err.name !== 'AbortError') console.error(err)
			})
			.finally(() => {
				if (!signal.aborted) setFetchingPosts(false)
			})
		return () => {
			controller.abort()
		}
	}, [])
	return (
		<PostListContext.Provider
			value={{
				PostList: PostList.postList,
				fetchingPosts: PostList.fetchingPosts,
				addPost: PostList.addPost,
				deletePost: PostList.deletePost,
				likePost: PostList.likePost,
				dislikePost: PostList.dislikePost,
			}}>
			{children}
		</PostListContext.Provider>
	)
}
